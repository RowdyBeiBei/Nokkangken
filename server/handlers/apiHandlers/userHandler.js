var db = require('../../../database').db;

//to-do, add error handling
exports.getMatches = (req, res) => {
  console.log(req.params, 'this is getMatches');
  db.users.matches({userId: +req.params.userId, eventTime: +req.params.time})
   .then(data=>{console.log(data);res.send(data);});
};

exports.getUser = (req, res) => {
  db.users.getUser({facebookId: +req.params.facebookId})
    .then(data=>res.send(data));
};

exports.addUser = (req, res) => {
  db.users.addUser({facebookId: +req.body.id, name: req.body.name, email: req.body.email, bio: req.body.bio, picture: req.body.picture})
    .then(data=> res.status(201).send(data))
    .catch(error=> res.status(409).send(error));
};

exports.updateUser = (req, res) => {
  db.users.update({facebookId: +req.body.facebookId, name: req.body.name, email: req.body.email, bio: req.body.bio, picture: req.body.picture})
    .then(data=> res.status(204).send(data))
    .catch(error=> res.status(400).send(error));
};

//body input is {time: time, userId: userId, locations: [busId1, busId2...]}
exports.addPossibleEvent = (req, res) => {
  console.log(req.body, 'this is the addpossiblevent');
  db.tx(t=>{
    return t.possibles.add({eventTime: +req.body.time, userId: +req.body.userId})
      .then(p => {
        return t.batch(req.body.locations.map(businessId => {
          return t.possibleLocations.add({businessId: businessId, possibleId: p.id});
        }));
      });
  })
  .then(data=> res.status(201).send(data))
  .catch(error=> res.status(409).send(error));
};

exports.getAllMatches = (req, res) => {
  db.task(t=>{
    return t.possibles.getPossibles({userId: +req.params.userId})
     .then(possibles => {
       return t.batch(possibles.map(p => {
         return t.users.matches({userId: p.id_user, eventTime: p.possibletime});
       }));
     });
  })
  .then(data=> res.status(200).send(data))
  .catch(error=> res.status(404).send(error));
};
