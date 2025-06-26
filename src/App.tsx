import { WeatherWidget } from "./WeatherWidget";
import { Welcome } from "./ignore/Welcome";

function App() {
  return (
    <div>
      <Welcome />
      <div style={{
        paddingTop: "2rem",
      }}>
        <WeatherWidget />
      </div>
    </div>
  );
}

export default App;
