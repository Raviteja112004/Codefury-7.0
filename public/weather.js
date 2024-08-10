

let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json";
let apiLocationKey = "c86d74172bc74b7d9dee6dd1d458951c";
const currentBtn = document.querySelector('#current');
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const apiKey = '1aa26e0885db3c423bcbef876b81ff1f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  



currentBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getLocation(latitude, longitude);
            },
            (error) => {
                console.error('Error getting location:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
});
const getLocation = async (latitude, longitude) => {
    let query = `${latitude},${longitude}`;
    let apiLoc = `${apiEndpoint}?key=${apiLocationKey}&q=${query}&pretty=1`;

    try {
        const res = await fetch(apiLoc);
        const data = await res.json();

        if (data.results && data.results.length > 0) {
            const city = data.results[0].components.city;
            console.log(data); 
            locationInput.value = city; 
            fetchWeather(city); 
        } else {
            console.log('No results found');
        }
    } catch (error) {
        console.log('Error fetching location data:', error);
    }
};


searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}
