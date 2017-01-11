var db = require('../../../database').db;

//adds a response, body format should be {wouldJoin: wouldJoin, userId: id(current user), eventTime: eventTime, prospectId: id(of person being voted on) }
exports.addResponse = (req, res) => {
  console.log('hi');
  db.responses.add({wouldJoin: req.body.wouldJoin, userId: +req.body.userId, eventTime: +req.body.eventTime, prospectId: +req.body.prospectId})
    .then(data=>res.status(201).send(data))
    .catch(error=>res.status(400).send(error));
};