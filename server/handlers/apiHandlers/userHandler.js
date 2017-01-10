var db = require('../../../database').db;

//to-do, add error handling
exports.getMatches = (req, res) => {
  db.users.matches({facebookId: +req.params.facebookId, eventTime: +req.params.time})
   .then(data=>res.send(data));
};

exports.getUser = (req, res) => {
  db.users.getUser({facebookId: req.params.facebookId})
    .then(data=>res.send(data));
};