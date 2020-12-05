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
        Image: "http://example.com/image.png",
        Location: {
          City: "Brisbane",
          State: "Queensland",
          Country: "Australia",
        }
      },
      {
        Title: "Wellbeing First - Mindfulness",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "http://example.com/image.png",
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
        Image: "http://example.com/image.png",
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
        Image: "http://example.com/image.png",
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
        Image: "http://example.com/image.png",
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
        Image: "http://example.com/image.png",
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
        Image: "http://example.com/image.png",
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
        Image: "http://example.com/image.png",
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