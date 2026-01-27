# 📊 Analytical Platform (Node.js + MongoDB)

This project is an analytical platform for retrieving, analyzing, and visualizing time-series data stored in MongoDB.  
It allows filtering data by date range, selecting specific fields, and viewing statistical metrics with charts.

---

## 🚀 Features
- Time-series data retrieval from MongoDB
- Date range filtering
- Field selection for analysis
- Line chart visualization (Chart.js)
- Statistical metrics:
  - Average
  - Minimum
  - Maximum
  - Standard Deviation
- RESTful API using Node.js and Express

---

## 🛠️ Technologies
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Frontend: HTML, JavaScript
- Visualization: Chart.js

---

## 📁 Project Structure
analytical-platform
├── backend
│ ├── models
│ │ └── Measurement.js
│ ├── routes
│ │ └── measurements.js
│ ├── index.js
│ ├── package.json
│ └── .env
├── frontend
│ ├── index.html
│ └── script.js
└── README.md


---

## ⚙️ Installation & Run

### 1️⃣ Install backend dependencies
```bash
cd backend
npm install
2️⃣ Create .env file (backend folder)
MONGO_URI=mongodb://127.0.0.1:27017/analytics_db
PORT=3000
3️⃣ Start MongoDB
mongod
or (Windows):

net start MongoDB
4️⃣ Run backend server
node index.js
Expected output:

MongoDB connected
Server running on port 3000
5️⃣ Open frontend
Open:

frontend/index.html
in your browser or using Live Server.

🔗 API Endpoints
Get time-series data
GET /api/measurements?field=field1&start_date=YYYY-MM-DD&end_date=YYYY-MM-DD
Get metrics
GET /api/measurements/metrics?field=field1
📊 Usage
Select a field (field1 / field2 / field3)

Choose start and end dates

Click Load Data

View the chart and metrics

⚠️ Error Handling
Invalid field name returns an error

Missing or empty date range is handled

No data in selected range returns a clear message

🎓 Academic Note
This project was developed for an academic assignment to demonstrate:

MongoDB schema design for time-series data

REST API development with Node.js

Data visualization and statistical analysis