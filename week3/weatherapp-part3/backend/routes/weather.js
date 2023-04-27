const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const City = require("../models/cities");

const OWM_API_KEY = "4810d2c7945fe82541e351ffa914d368";

let weather = [
  { cityName: "London", description: "cloudy", main: "clouds", tempMin: 12.95, tempMax: 17.39 },
  {
    cityName: "Rio de Janeiro",
    main: "clear",
    description: "sunny",
    tempMin: 23.98,
    tempMax: 28.63,
  },
  {
    cityName: "Stockholm",
    description: "sunny",
    main: "clear",
    tempMin: 6.03,
    tempMax: 10.59,
  },
];

router.post("/", (req, res) => {
  City.findOne({ cityName: { $regex: new RegExp(req.body.cityName, "i") } })
    .then(dbData => {
      if (dbData === null) {
        if (!weather.some(e => e.cityName.toLowerCase() === req.body.cityName.toLowerCase())) {
          // City not yet registered; create new city
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metric`)
            .then(response => response.json())
            .then(apiData => {
              const newCity = new City({
                cityName: apiData.name,
                main: apiData.weather[0].main,
                description: apiData.weather[0].description,
                tempMin: apiData.main.temp_min,
                tempMax: apiData.main.temp_max,
              });

              newCity.save().then(newDoc => {
                res.json({ result: true, weather: newDoc });
              });
            });
        } else {
          // City already exists in DB
          res.json({ result: false, error: "City already saved" });
        }  } else {
        // City already exists in DB
        res.json({ result: false, error: "City already saved" });
      }
    });
});

router.get("/", (req, res) => {
    City.find().then(data => {
        res.json({ weather:data });
    })
 
});
    
    router.get("/:cityName", (req, res) => {
        City.findOne({ cityName: { $regex: new RegExp(req.params.cityName, "i") } })
          .then(data => {
            if (data) {
              res.json({ result: true, weather: data });
            } else {
              res.json({ result: false, error: "City not found" });
            }
          });
      });
      
      
 

     


router.delete("/:cityName", (req, res) => {
    City.deleteOne({
    cityName: { $regex: new RegExp(req.params.cityName, "i") }
}).then(deletedDoc => {
    if (deletedDoc.deleteCount > 0) {
        //document successfully deleted
        res.json({ result: true });
    } else {
      res.json({ result: false, error: "City not found" });
    }
})
  const searchedWeather = weather.find(
    e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase()
  );
  if (searchedWeather) {
    weather = weather.filter(
      e => e.cityName.toLowerCase() !== req.params.cityName.toLowerCase()
    );
    res.json({ result: true, weather });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});


module.exports = router;
