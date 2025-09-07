let API_KEY = '21b7c39228fc60eb7e1d14940862e805';
let cityEl = document.getElementById("city");
let submitEl = document.getElementById("subbtn");
let dispEl = document.getElementById("display");

async function getWeatherData(city) {
    dispEl.innerHTML = '<p>Loading weather data... ⏳</p>';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric';
    //  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} -
            ${response.statusText}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        let errorMessage = 'Failed to fetch weather data, try again.';
        if (error.message.includes('404')) {
            errorMessage = 'City not found. Try again.';
        } 
        else if (error.message.includes('401')) {
            errorMessage = 'API Key is invalid or missing. Please ensure your api-key is correct.';
        }
        dispEl.innerHTML = `<p class="error-message">${errorMessage}</p>`;
        }
}

function displayWeather(data) {
    const cityName = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed
    const formattedDesc = description.charAt(0).toUpperCase() + 
    description.slice(1);
    dispEl.innerHTML = `
    <h2>${cityName}, ${country}</h2>
    <p class="temp">${temp}°C</p>
    <p>${formattedDesc}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>`;
}
// Add event listener to the button
submitEl.addEventListener('click', () => {
const city = cityEl.value.trim(); // 
if (city) {
    getWeatherData(city); 
} 
else {
    dispEl.innerHTML = '<p class="error-message">Please enter a city name!</p>';
}
});

// Optional: Allow pressing Enter key to trigger search
cityEl.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
    submitEl.click(); // Simulate a click on the button
}
});

// Initial message on load
window.onload = () => {
dispEl.innerHTML = '<p>Enter a city name and click get weather button to see the current conditions.</p>';
};
