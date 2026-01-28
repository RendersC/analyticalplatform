const express = require('express');
const router = express.Router();
const Measurement = require('../models/Measurement');


// Получение time-series данных
router.get('/', async (req, res) => {
const { field, start_date, end_date } = req.query;


if (!field) return res.status(400).json({ error: 'Field is required' });


const query = {};
if (start_date && end_date) {
query.timestamp = {
$gte: new Date(start_date),
$lte: new Date(end_date)
};
}


try {
const data = await Measurement.find(query)
.select(`timestamp ${field}`)
.sort({ timestamp: 1 });


if (data.length === 0) {
return res.status(404).json({ error: 'No data found' });
}


res.json(data);
} catch (err) {
res.status(500).json({ error: 'Server error' });
}
});


// Метрики
router.get('/metrics', async (req, res) => {
const { field } = req.query;
if (!field) return res.status(400).json({ error: 'Field is required' });


try {
const result = await Measurement.aggregate([
{
$group: {
_id: null,
avg: { $avg: `$${field}` },
min: { $min: `$${field}` },
max: { $max: `$${field}` },
stdDev: { $stdDevPop: `$${field}` }
}
}
]);


if (!result.length) {
return res.status(404).json({ error: 'No data' });
}


res.json(result[0]);
} catch (err) {
res.status(500).json({ error: 'Server error' });
}
});


module.exports = router;