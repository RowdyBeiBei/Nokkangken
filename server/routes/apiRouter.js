var router = require('express').Router();
var userHandler = require('../handlers/apiHandlers/userHandler.js');

//user endpoints
router.get('/user/matches/:facebookId/:time', userHandler.getMatches);
router.get('/user/:facebookId', userHandler.getUser);
router.post('/user', userHandler.addUser);


module.exports = router; 