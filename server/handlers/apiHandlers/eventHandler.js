var db = require('../../../database').db;

//gets all of the users (and their info--excluding the active user) for a specified event

exports.getScheduledUsers = (req, res) => {
  db.task(t=>{
    return t.user_scheduleds.getEventUsers(req.params)
     .then(users => {
       return t.batch(users.map(user => {
         return t.users.getUser({userId: user.id});
       }));
     });
  })
  .then(data=> res.status(200).send(data))
  .catch(error=> res.status(404).send(error));
};