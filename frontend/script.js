let chart;

async function loadData() {
  const field = document.getElementById('field').value;
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;

  if (!start || !end) {
    alert('Please select start and end dates');
    return;
  }

  try {
    
    const res = await fetch(
      `http://localhost:3000/api/measurements?field=${field}&start_date=${start}&end_date=${end}`
    );

    if (!res.ok) {
      throw new Error('No data found for selected range');
    }

    const data = await res.json();

    const labels = data.map(d =>
      new Date(d.timestamp).toLocaleString()
    );
    const values = data.map(d => d[field]);

    
    if (chart) {
      chart.destroy();
    }

    chart = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: field,
            data: values,
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        }
      }
    });

    
    const metricsRes = await fetch(
      `http://localhost:3000/api/measurements/metrics?field=${field}`
    );

    const metrics = await metricsRes.json();

    
    document.getElementById('metricsBox').style.display = 'block';

    document.getElementById('avg').innerText =
      `Average: ${metrics.avg.toFixed(2)}`;

    document.getElementById('min').innerText =
      `Min: ${metrics.min}`;

    document.getElementById('max').innerText =
      `Max: ${metrics.max}`;

    document.getElementById('std').innerText =
      `Std Dev: ${metrics.stdDev.toFixed(2)}`;

  } catch (error) {
    alert(error.message);
  }
}
