let is_loading = false;
let error_message = "";
let weather_data = null;

const output_element = document.getElementById("weather-output");

function renderWeather() {
  if (is_loading) {
    output_element.className = "loading";
    output_element.textContent = "Loading...";
    return;
  }

  if (error_message) {
    output_element.className = "error";
    output_element.textContent = error_message;
    return;
  }

  if (weather_data) {
    const current = weather_data.properties.periods[0];

    output_element.className = "weather";
    output_element.innerHTML = `
      <p><strong>${current.temperature}&deg;</strong></p>
      <p>${current.shortForecast}</p>
    `;
    return;
  }

  output_element.className = "";
  output_element.textContent = "Weather data not available.";
}

async function getWeatherData() {
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const data = await response.json();
    weather_data = data;
  } catch (error) {
    error_message = error.message || "Something went wrong.";
    weather_data = null;
  } finally {
    is_loading = false;
    renderWeather();
  }
}

getWeatherData();
