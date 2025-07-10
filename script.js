async function getWeather() {
  const cityInput = document.getElementById("cityInput").value.trim();
  const apiKey = "2a6d5ecde5a0e39179356ec80dca7509";

  if (!cityInput) {
    alert("Please enter a city name.");
    return;
  }

  const city = encodeURIComponent(cityInput);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML = `<p>❌ City not found. Try a valid Indian city.</p>`;
      return;
    }

    const weatherHtml = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p><strong>🌡 Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>🌤 Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>💨 Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHtml;
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weatherResult").innerHTML = `<p>⚠️ Error fetching data. Check your internet or API key.</p>`;
  }
}
