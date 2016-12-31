const router = require('express').Router();
const authHandler = require('../handlers/authHandler.js');

router.get('/login', authHandler.login);

module.exports = router;
