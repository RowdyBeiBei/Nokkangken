var router = require('express').Router();
var userHandler = require('../handlers/apiHandlers/userHandler.js');

//user endpoints
router.get('/user/matches/:facebookId/:time', userHandler.getMatches);
router.get('/user/:facebookId', userHandler.getUser);
router.post('/user', userHandler.addUser);
router.put('/user', userHandler.updateUser);
router.post('/user/possibleEvent', userHandler.addPossibleEvent);

module.exports = router; 