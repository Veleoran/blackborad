var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];


router.post('/trips', (req, res) => {
trips.push ({departure : req.body.newdeparture, arrival : req.body.newarrival});
res.json({ allTrips: trips });
});





// POST /trips - Sample result: 
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]


router.get('/trips', (req, res) => {
    res.json({ allTrips: trips});

});





// GET /trips - Sample result:
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]

router.get('/lastTrip', (req, res) => {
    
    let lastTrip = trips[trips.length - 1];
    res.json({lastTrip});
})





// GET /lastTrip - Sample result:
// "lastTrip": {
//   "departure": "Grenoble",
//   "arrival": "Strasbourg"
// }

router.delete('/allTrips', (req, res) => {
    trips = [];
    res.json([]);
});



// DELETE /trips - Sample result:
// "allTrips": []

module.exports = router;