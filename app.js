const express = require('express');
const cors = require('cors');
const events = require("./events.js");

const app = express();

app.use(cors());

app.get('/api/events', (req, res) => {
  res.status(200).send(events);
});

module.exports = app;