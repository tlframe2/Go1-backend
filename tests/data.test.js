const events = require("../events.js");

describe('events.js should export an array of 8 objects', () => {
  test('events is an array with 8 objects', () => {
    expect(events.length).toBe(8);
  });

  test('exported events should match events in events.js', () => {
    expect(events).toEqual([
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
  })
});