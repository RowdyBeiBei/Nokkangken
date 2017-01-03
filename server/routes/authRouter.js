const router = require('express').Router();
const authHandler = require('../handlers/authHandler.js');

router.get('/login', authHandler.login);
router.post('/signup', authHandler.signup);

module.exports = router;
