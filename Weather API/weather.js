const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");
const historyList = document.getElementById("history");

console.log("Script Started");

// Fetch Weather Function
async function getWeather(city){

console.log("Fetching weather for:", city);

try{

// Step 1: Get latitude & longitude
const geoResponse = await fetch(
`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
);

if(!geoResponse.ok){
throw new Error("City not found");
}

const geoData = await geoResponse.json();

if(!geoData.results){
throw new Error("City not found");
}

const latitude = geoData.results[0].latitude;
const longitude = geoData.results[0].longitude;
const cityName = geoData.results[0].name;

// Step 2: Get weather
const weatherResponse = await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
);

const weatherData = await weatherResponse.json();

displayWeather(cityName, weatherData.current_weather.temperature);

saveHistory(cityName);

}
catch(error){

console.error("Error occurred:", error);

weatherResult.innerHTML =
`<p style="color:red;">⚠️ ${error.message}</p>`;

}

console.log("Fetch Function Completed");

}

// Display Weather
function displayWeather(city, temp){

weatherResult.innerHTML = `
<h2>${city}</h2>
<p>Temperature: ${temp} °C</p>
`;

}

// Save to Local Storage
function saveHistory(city){

let history = JSON.parse(localStorage.getItem("cities")) || [];

if(!history.includes(city)){
history.push(city);
localStorage.setItem("cities", JSON.stringify(history));
}

loadHistory();

}

// Load History
function loadHistory(){

historyList.innerHTML = "";

let history = JSON.parse(localStorage.getItem("cities")) || [];

history.forEach(city => {

const li = document.createElement("li");

li.textContent = city;

li.addEventListener("click", () => {
getWeather(city);
});

historyList.appendChild(li);

});

}

// Button Click Event
searchBtn.addEventListener("click", () => {

console.log("Search Button Clicked");

const city = cityInput.value.trim();

if(city === ""){
weatherResult.innerHTML =
"<p style='color:red;'>Enter a city name</p>";
return;
}

getWeather(city);

});

console.log("Script Ended");

// Load history on page load
loadHistory();