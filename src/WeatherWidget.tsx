import { usePingExample } from "./hooks/usePingExample";

export type TCity = {
	lat: string;
	lng: string;
	name: string;
};

export type TCityWeather = {
	temperature: string;
	humidity: string;
	condition: string;
};

export function WeatherWidget() {
	const { pongData } = usePingExample();

	return (
		<div>
			Your Weather Widget in <code>./src/WeatherWidget.tsx</code>
			<pre>{JSON.stringify(pongData)}</pre>
		</div>
	);
}
