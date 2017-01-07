var router = require('express').Router();
var userHandler = require('../handlers/apiHandlers/userHandler.js');

router.get('/users/matches/:facebookId/:time', userHandler.getMatches);

module.exports = router; 