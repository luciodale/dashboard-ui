# Project Overview

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Used for type safety and better code quality.
- **Axios**: A lightweight HTTP client to fetch data from the API.
- **React Icons**: Provides a wide selection of SVG icons to use in your UI.

## Setup Instructions

To get started with the project, follow these steps:

`yarn install` - Install the project dependencies.

`yarn run dev` - Start the development server.

## API Reference

- **GET `/api/cities`**: Returns a list of cities for the user to select from.
- **GET `/api/weather/:lat/:lng`**: Returns the weather details for the selected city based on latitude and longitude.

## Requirements

0. Open the `WeatherWidget.tsx` file and implement the following features:

1. **City Selection**: The user should be able to select one of the cities returned by the GET `/api/cities` endpoint.
2. **Weather Retrieval**: The app can retrieve the weather info of the selected city by calling the GET `/api/weather/:lat/:lng` endpoint. Notice that half of the cities won't have weather information, so you should handle this case.
3. **Display Weather Information**: Display the temperature, humidity, and condition in a nice widget.