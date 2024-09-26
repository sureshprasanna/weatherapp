document.getElementById('getWeatherButton').addEventListener('click', getWeather);

function getWeather() {
let city = document.getElementById('cityInput').value;
    
if (city === "") {
document.getElementById('weatherDisplay').innerHTML = "<p>Please enter a city name!</p>";
return;
}
let apiKey = '8ecb86886c7bffe042076ee9500893d7';
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
if (data.cod === 200) {
let weatherInfo = `
<p><strong>City:</strong> ${data.name}</p>
<p><strong>Temperature:</strong> ${data.main.temp}°C</p> 
<p><strong>Weather:</strong> ${data.weather[0].description}</p>
<p><strong>Humidity:</strong> ${data.main.humidity}%</p>
<p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
`;
document.getElementById('weatherDisplay').innerHTML = weatherInfo;
} else {
document.getElementById('weatherDisplay').innerHTML = `<p>City not found!</p>`;
}
})
.catch(error => {
document.getElementById('weatherDisplay').innerHTML = `<p>Error fetching weather data!</p>`;
console.error(error);
});
}
