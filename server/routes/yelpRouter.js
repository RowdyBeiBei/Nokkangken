var router = require('express').Router();
var yelpHandler = require('../handlers/yelpHandler.js');

router.get('/locations', yelpHandler.getNearbyLocations);
router.get('/selectedLocation', yelpHandler.getSelectedLocation);

module.exports = router;
