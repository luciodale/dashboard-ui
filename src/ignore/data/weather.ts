const conditions = ["Sunny", "Cloudy", "Rainy", "Snowy"] as const;

// FNV-1a, for the magic constants below.
function hashCoordinates(lat: string, lng: string) {
	let hash = 2166136261;

	for (const character of `${lat},${lng}`) {
		hash ^= character.charCodeAt(0);
		hash = Math.imul(hash, 16777619);
	}

	return hash >>> 0;
}

// mulberry32, for the magic constants below.
function createRandom(seed: number) {
	let state = seed;

	return function next() {
		state = (state + 0x6d2b79f5) | 0;
		let t = Math.imul(state ^ (state >>> 15), 1 | state);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

export function getWeatherForCoordinates(lat: string, lng: string) {
	const next = createRandom(hashCoordinates(lat, lng));

	return {
		temperature: (next() * 40 - 10).toFixed(1), // Between -10 and 30
		humidity: (next() * 100).toFixed(1), // Between 0 and 100
		condition:
			conditions[Math.floor(next() * conditions.length)] ?? conditions[0],
	};
}

// Slow enough that loading states and out of order responses are observable.
export function getLatencyForCoordinates(lat: string, lng: string) {
	const next = createRandom(hashCoordinates(lat, lng) ^ 0x85ebca6b);
	return Math.round(200 + next() * 1000);
}
