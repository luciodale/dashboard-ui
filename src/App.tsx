import { Welcome } from "./ignore/Welcome";
import { WeatherWidget } from "./WeatherWidget";

function App() {
	return (
		<div>
			<Welcome />
			<div
				style={{
					paddingTop: "2rem",
				}}
			>
				<WeatherWidget />
			</div>
		</div>
	);
}

export default App;
