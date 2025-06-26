import { useState } from "react";

export function Welcome() {
  const [showRequirements, setShowRequirements] = useState(
    !!localStorage.getItem("showRequirements")
  );

  const toggleRequirements = () => {
    setShowRequirements(!showRequirements);
    if (showRequirements) {
      localStorage.removeItem("showRequirements");
      return;
    }
    localStorage.setItem("showRequirements", "true");
  };

  return (
    <div style={{
      borderBottom: "1px solid #ffffff",
      backgroundColor: "#121212",
      paddingBottom: "20px"
    }}>

      <div style={{
        color: "#e0e0e0",
        fontFamily: "Roboto, sans-serif",
      }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h2>Project Requirements</h2>
          <button onClick={toggleRequirements}>
            {showRequirements ? "Hide" : "Show"}
          </button>
        </div>

        {showRequirements && (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <h3 style={{
                margin: "0",
              }}>Task: Build a Weather Widget</h3>
              <div>
                Create a weather widget that allows users to view current weather for a selected city.
              </div>
              
              <h4
                style={{
                  margin: "0",
                }}
              >Core Requirements:</h4>
              <div>
                <li>Display a list of cities for user selection</li>
                <li>Allow users to choose a city from the list</li>
                <li>Show current weather information for the selected city</li>
              </div>

              <h4 style={{
                margin: "0",
              }}>API Endpoints:</h4>
              <div>
                <li><code style={{ color: "orange" }}>GET /api/cities</code> - Fetch available cities</li>
                <li><code style={{ color: "orange" }}>GET /api/weather/:lat/:lng</code> - Get weather data for coordinates</li>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
