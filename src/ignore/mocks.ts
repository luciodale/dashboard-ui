import { http, HttpResponse, delay } from "msw";
import { setupWorker } from "msw/browser";
import { cities } from "./data/cities";
import { getRandomWeather } from "./data/weather";

export const handlers = [
  http.get("/api/ping", async () => {
    await delay(100);
    return HttpResponse.json({
      message: "pong",
    });
  }),
  http.get("/api/cities", async () => {
    await delay(100);
    return HttpResponse.json(cities);
  }),
  http.get("/api/weather/:lat/:lng", async (req) => {
    await delay(50);
    const { lat, lng } = req.params;

    if (!lat || !lng) {
      return HttpResponse.json(
        {
          message: "Data not found",
        },
        { status: 404 }
      );
    }

    return HttpResponse.json(getRandomWeather());
  }),
];

export const worker = setupWorker(...handlers);
