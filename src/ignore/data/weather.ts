export function getRandomWeather() {
  const conditions = ["Sunny", "Cloudy", "Rainy", "Snowy"];
  return {
    temperature: (Math.random() * 40 - 10).toFixed(1), // Random temperature between -10 and 30
    humidity: (Math.random() * 100).toFixed(1), // Random humidity between 0 and 100
    condition: conditions[Math.floor(Math.random() * conditions.length)],
  } 
}
