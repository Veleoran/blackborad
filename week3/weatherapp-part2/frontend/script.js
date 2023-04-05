const  response  = require("../backend/app");

// Insert your code here
const CurrentWeatherData = fetch('http://localhost:3000/CurrentWeatherData')
.then(response => response.json())
.then(data => {
    console.log(data.CurrentWeatherData)
    return data
})