var db = require('../../../database').db;

//gets all of the users (and their info--excluding the active user) for a specified event

exports.getScheduledUsers = (req, res) => {
  db.task(t=>{
    return t.user_scheduleds.getEventUsers(req.params)
     .then(users => {
       return t.batch(users.map(user => {
         return t.users.getUser({userId: user.idu});
       }));
     });
  })
  .then(results=> res.status(200).send(results))
  .catch(error=> res.status(404).send(error));
};

exports.getAllScheduledUsers = (req, res) =>
  db.users.getAllScheduledMatches(req.params)
  .then(results => results.status(200).send(results))
  .catch(error=> res.status(404).send(error));