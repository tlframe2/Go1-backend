const request = require('supertest');
const app = require('../app');

describe("Test getting all events route", () => {
  test("GET should return status code 200", async () => {
    return await request(app).get("/api/events").expect(200);
  });

  test("Events should be an array of 8 objects", async () => {
    const { body } = await request(app).get("/api/events");
    return expect(body.length).toBe(8);
  });

  test("Events returned should match whats in events.js", async () => {
    const { body } = await request(app).get("/api/events");
    return expect(body).toEqual([
      {
        Title: "Infection Prevention and Control (Australia)",
        Time: "2021-03-22T02:30:00.000Z",
        Image: "https://images.unsplash.com/photo-1579781403261-cbc8f5010479?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        Location: {
          City: "Brisbane",
          State: "Queensland",
          Country: "Australia",
        }
      },
      {
        Title: "Wellbeing First - Mindfulness",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "https://images.unsplash.com/photo-1602276507500-600178f63aae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pbmRmdWxsbmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Location: {
          City: "Cairns",
          State: "Queensland",
          Country: "Australia",
        },
        AvailableSeats: [
          {
            id: "W25"
          },
          {
            id: "B29"
          }
        ]
      },
      {
        Title: "10 Minutes Managing Stress",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Location: {
          City: "Gold Coast",
          State: "Queensland",
          Country: "Australia",
        },
        AvailableSeats: [
          {
            id: "W25"
          },
          {
            id: "B29"
          }
        ]
      },
      {
        Title: "10 Minute Pandemic Awareness",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "https://images.unsplash.com/photo-1584981344812-aac1f5a6ec91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGFuZGVtaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Location: {
          City: "Gold Coast",
          State: "Queensland",
          Country: "Australia",
        },
        AvailableSeats: [
          {
            id: "W25"
          },
          {
            id: "B29"
          }
        ]
      },
      {
        Title: "Morning Yoga Kickstart",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "https://images.unsplash.com/photo-1560750844-15df4e073770?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbmRmdWxsbmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Location: {
          City: "Gold Coast",
          State: "Queensland",
          Country: "Australia",
        },
        AvailableSeats: [
          {
            id: "W25"
          },
          {
            id: "B29"
          }
        ]
      },
      {
        Title: "Hand Hygiene in the Workplace",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "https://images.unsplash.com/photo-1584402710722-32f7be5bc98e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhc2hpbmclMjBoYW5kc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Location: {
          City: "Gold Coast",
          State: "Queensland",
          Country: "Australia",
        },
        AvailableSeats: [
          {
            id: "W25"
          },
          {
            id: "B29"
          }
        ]
      },
      {
        Title: "Equal Employment Opportunity",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGVxdWFsJTIwZW1wbG95bWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Location: {
          City: "Gold Coast",
          State: "Queensland",
          Country: "Australia",
        },
        AvailableSeats: [
          {
            id: "W25"
          },
          {
            id: "B29"
          }
        ]
      },
      {
        Title: "First Aid - Basics",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Zmlyc3QlMjBhaWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Location: {
          City: "Gold Coast",
          State: "Queensland",
          Country: "Australia",
        },
        AvailableSeats: [
          {
            id: "W25"
          },
          {
            id: "B29"
          }
        ]
      },
    ]);
  });  
});

describe('Test getting single event by id', () => {
  test("Using id 0 should return status code 200", async () => {
    return await request(app).get("/api/events/0").expect(200);
  });

  test("Event with id 0 should return first object in events.js", async () => {
    const { body } = await request(app).get("/api/events/0");
    return expect(body).toEqual({
      Title: "Infection Prevention and Control (Australia)",
      Time: "2021-03-22T02:30:00.000Z",
      Image: "https://images.unsplash.com/photo-1579781403261-cbc8f5010479?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Location: {
        City: "Brisbane",
        State: "Queensland",
        Country: "Australia",
      }
    });
  });

  test("Event with id 7 should return last object in events.js", async () => {
    const { body } = await request(app).get("/api/events/7");
    return expect(body).toEqual({
      Title: "First Aid - Basics",
      Time: "2021-03-24T02:30:00.000Z",
      Image: "https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Zmlyc3QlMjBhaWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      Location: {
        City: "Gold Coast",
        State: "Queensland",
        Country: "Australia",
      },
      AvailableSeats: [
        {
          id: "W25"
        },
        {
          id: "B29"
        }
      ]
    });
  });

  test("Using id 8 should return 404 status code", async () => {
    return await request(app).get("/api/events/8").expect(404);
  });

  test("Using id 8 should return error message", async () => {
    return await request(app).get("/api/events/8").expect('Could not find event with given id.');
  });

  test("Using id x should return 404 status code", async () => {
    return await request(app).get("/api/events/x").expect(404);
  });

  test("Using id x should return error message", async () => {
    return await request(app).get("/api/events/x").expect('Could not find event with given id.');
  });

  test("Using id -1 should return 404 status code", async () => {
    return await request(app).get("/api/events/-1").expect(404);
  });

  test("Using id -1 should return error message", async () => {
    return await request(app).get("/api/events/-1").expect('Could not find event with given id.');
  });
});