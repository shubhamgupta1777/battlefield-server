
const express = require('express');
const cors = require('cors');
const data = require('./serverData');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json(data);
});

module.exports = app;
