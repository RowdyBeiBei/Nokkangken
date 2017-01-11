var router = require('express').Router();
var userHandler = require('../handlers/apiHandlers/userHandler.js');

//user endpoints
router.get('/user/possibles/:facebookId/:time', userHandler.getMatches);
// router.post('/user/possibles/', userHandler.postMatches);
router.get('/user/:facebookId', userHandler.getUser);
router.post('/user', userHandler.addUser);
router.put('/user', userHandler.updateUser);
router.post('/user/possibleEvent', userHandler.addPossibleEvent);


module.exports = router;
