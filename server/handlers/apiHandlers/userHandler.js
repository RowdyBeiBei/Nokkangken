var db = require('../../../database').db;


exports.getMatches = (req, res) => {
  db.users.matches({facebookId: +req.params.facebookId, eventTime: +req.params.time})
   .then(data=>res.send(data));
};