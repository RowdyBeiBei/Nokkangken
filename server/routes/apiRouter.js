var router = require('express').Router();
var userHandler = require('../handlers/apiHandlers/userHandler.js');

//user endpoints
router.get('/users/matches/:facebookId/:time', userHandler.getMatches);
// router.get('/user', userHandler.getUser);
// router.put('/user', userHandler.updateOrCreateUser);


module.exports = router; 