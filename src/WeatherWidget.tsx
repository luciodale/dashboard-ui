import { useEffect } from "react";
import axios from "axios";

type TCity = {
  lat: string;
  lng: string;
  name: string;
};

type TCityWeather = {
  temperature: string;
  humidity: string;
  condition: string;
};

function useExampleFetch() {
  useEffect(() => {
    const pingFn = async () => {
      const res = await axios.get("/api/ping");
      console.log(res.data);
    };
    pingFn();
  }, []);
}

export function WeatherWidget() {
  useExampleFetch();

  return <div>Your Weather Widget in <code>./src/WeatherWidget.tsx</code></div>;
}
