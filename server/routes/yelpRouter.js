var router = require('express').Router();
var yelpHandler = require('../handlers/yelpHandler.js');

router.get('/locations', yelpHandler.getNearbyLocations);


module.exports = router; 