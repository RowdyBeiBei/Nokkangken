var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');



module.exports = function(app, express) { 
  app.use('/', express.static(path.join(__dirname, '')));
  
  app.get('/dist/main.js', function(req, res) {
    console.log('called');
    res.sendFile(path.join(__dirname, ''));
  });
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  
};

