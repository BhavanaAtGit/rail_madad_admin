const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const mockData = require('./db.json');

app.get('/api/grievance-trends', (req, res) => res.json(mockData['grievance-trends']));
app.get('/api/department-distribution', (req, res) => res.json(mockData['department-distribution']));
app.get('/api/grievances', (req, res) => res.json(mockData['grievances']));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
