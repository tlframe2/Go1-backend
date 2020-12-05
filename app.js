const express = require('express');
const cors = require('cors');
const events = require("./events.js");

const app = express();

app.use(cors());

// @route   GET /api/events
// @desc    Get all events
app.get('/api/events', (req, res) => {
  res.status(200).send(events);
});

// @route   GET /api/events/:eventId
// @desc    Get event by ID
app.get('/api/events/:eventId', (req, res) => {
  /* 
    Since these events aren't coming from a database and don't have an id,
    I'm using their array index to access them, so I need to convert eventId into a number
  */ 
  const eventId = parseInt(req.params.eventId);

  /*
    Ensures valid id is given. Giving an invalid id will return a 404 and an error message.
    Note: parseInt returns null if argument is not an integer, therefore I added a null check
    to check for non-integer ids like 'abc'
  */
  if (eventId != null && eventId < events.length && eventId >= 0) {
    const event = events[eventId];
    res.send(event);
  } else {
    res.status(404).send('Could not find event with given id.');
  }
});


module.exports = app;