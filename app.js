const express = require('express');
const cors = require('cors');
const events = require("./events.js");

const app = express();

app.use(cors());

app.get('/api/events', (req, res) => {
  res.status(200).send(events);
});

app.get('/api/events/:eventId', (req, res) => {
  const eventId = parseInt(req.params.eventId);

  if (eventId != null && eventId < events.length) {
    const event = events[eventId];
    res.send(event);
  } else {
    res.status(404).send('Could not find event with given id.');
  }
});


module.exports = app;