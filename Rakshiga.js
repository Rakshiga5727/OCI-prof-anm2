// Replace with your OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

// Function to get weather data
function getWeather() {
    const city = document.getElementById("city-input").value; // Get the city input by the user
    if (city) {
        // Construct the URL for the API request
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        // Fetch data from the OpenWeatherMap API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "404") {
                    // If city is not found, alert the user
                    alert("City not found");
                    return;
                }
                
                // Update
