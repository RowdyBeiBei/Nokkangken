var db = require('../../../database').db;

//to-do, add error handling
exports.getMatches = (req, res) => {
  db.users.matches({facebookId: +req.params.facebookId, eventTime: +req.params.time})
   .then(data=>res.send(data));
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

// { name: 'Nick Fortner',
//   id: '1319206294806849',
//   picture:
//    { data:
//       { height: 160,
//         is_silhouette: false,
//         url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p160x160/14054241_1182904738437006_659567511774400480_n.jpg?oh=8861d893c3cfd535f072d217590c5b22&oe=5913BE3A',
//         width: 160 } } }
