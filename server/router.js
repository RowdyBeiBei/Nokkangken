var apiRouter = require('./routes/apiRouter.js');
var authRouter = require('./routes/authRouter.js');
var yelpRouter = require('./routes/yelpRouter.js');
var router = require('express').Router(); 

//uncomment once files to connect exist
// router.use('/api', apiRouter);
// router.use('/auth', authRouter);
router.use('/yelp', yelpRouter);
router.use('/error', function(req, res) {
  res.status(401).send('unauthorized');
});


module.exports = router;   