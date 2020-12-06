# Go1-backend

Backend API made using NodeJS and Express. Serves as a way to send events to frontend. Events is an array of objects found in the events.js file.

Contains only two routes, but only one is actually used by the frontend.

## /api/events
Returns all events found in events.js. This is where the frontend fetches data.

## /api/events/:eventId
Returns single event with provided id. Since the events aren't coming from a database and don't have an id, id just corresponds to index in events array.

## To start application at localhost:5000
node server.js or nodemon server.js

## To run tests
npm test
