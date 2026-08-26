import { usePingExample } from "./hooks/usePingExample";

export function WeatherWidget() {
	const { pongData } = usePingExample();

	return (
		<div>
			Your Weather Widget in <code>./src/WeatherWidget.tsx</code>
			<pre>{JSON.stringify(pongData)}</pre>
		</div>
	);
}
