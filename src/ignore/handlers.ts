import { delay, HttpResponse, http } from "msw";
import { cities } from "./data/cities";
import {
	getLatencyForCoordinates,
	getWeatherForCoordinates,
} from "./data/weather";

export type TPingResponse = { message: "pong" };

// Every city returns 200 except the second in the list, which returns 500.
// A 404 needs no special case: any coordinates not in the list produce one.
const SERVER_ERROR_CITY_INDEX = 1;

export const handlers = [
	http.get("/api/ping", async () => {
		await delay(100);
		return HttpResponse.json({
			message: "pong",
		} satisfies TPingResponse);
	}),
	// Never fails: without the city list there is nothing to build against.
	http.get("/api/cities", async () => {
		await delay(100);
		return HttpResponse.json(cities);
	}),
	http.get("/api/weather/:lat/:lng", async ({ params }) => {
		const lat = String(params.lat);
		const lng = String(params.lng);

		await delay(getLatencyForCoordinates(lat, lng));

		const cityIndex = cities.findIndex(
			(city) => city.lat === lat && city.lng === lng,
		);

		if (cityIndex === -1) {
			return HttpResponse.json({ message: "City not found" }, { status: 404 });
		}

		if (cityIndex === SERVER_ERROR_CITY_INDEX) {
			return HttpResponse.json(
				{ message: "Weather service unavailable" },
				{ status: 500 },
			);
		}

		return HttpResponse.json(getWeatherForCoordinates(lat, lng));
	}),
];
