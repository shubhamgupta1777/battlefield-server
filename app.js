const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/api/server-info', (req, res) => {
  res.json({ message: 'Battlefield server info' });
});

// Export the handler for Vercel
module.exports.handler = serverless(app);
