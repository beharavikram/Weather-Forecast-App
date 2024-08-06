async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'fd57b85378965911c83fcfe5919a752a'; 
    const url = 'https://home.openweathermap.org';

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            const weatherInfo = `
                <div class="weather-info">
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                </div>
            `;
            document.getElementById('weather-result').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather-result').innerHTML = <p>City not found. Please try again.</p>;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-result').innerHTML = <p>Error fetching weather data. Please try again later.</p>;
    }
}