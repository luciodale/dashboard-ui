import { useState } from "react";

const showReqStore = localStorage.getItem("showRequirements");
const isRequirementsPanelVisible = showReqStore
	? Boolean(Number(showReqStore))
	: true;

export function Welcome() {
	const [showRequirements, setShowRequirements] = useState(
		isRequirementsPanelVisible,
	);

	const toggleRequirements = () => {
		setShowRequirements(!showRequirements);
		if (showRequirements) {
			localStorage.setItem("showRequirements", "0");
			return;
		}
		localStorage.setItem("showRequirements", "1");
	};

	return (
		<div
			style={{
				borderBottom: "1px solid #ffffff",
				backgroundColor: "#121212",
				paddingBottom: "20px",
			}}
		>
			<div
				style={{
					color: "#e0e0e0",
					fontFamily: "Roboto, sans-serif",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
					}}
				>
					<h2>Project Requirements</h2>
					<button type="button" onClick={toggleRequirements}>
						{showRequirements ? "Hide" : "Show"}
					</button>
				</div>

				{showRequirements && (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							gap: "1rem",
						}}
					>
						<h3
							style={{
								margin: "0",
							}}
						>
							Task: Build a Weather Widget
						</h3>
						<div>
							Create a weather widget that allows users to view current weather
							for a selected city.
						</div>

						<h4
							style={{
								margin: "0",
							}}
						>
							Core Requirements:
						</h4>
						<div>
							<li>Show some cities</li>
							<li>The user can pick a city</li>
							<li>Show current weather information for the selected city</li>
							<li>
								Handle loading and error states: some cities return errors
								instead of weather
							</li>
						</div>

						<h4
							style={{
								margin: "0",
							}}
						>
							API Endpoints:
						</h4>
						<div>
							<li>
								<code style={{ color: "orange" }}>GET /api/cities</code> - Fetch
								available cities
							</li>
							<li>
								<code style={{ color: "orange" }}>
									GET /api/weather/:lat/:lng
								</code>{" "}
								- Get weather data for coordinates
							</li>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
