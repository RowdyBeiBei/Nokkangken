var db = require('./database').db;

db.tx(function (t) {
  return t.batch([
    t.users.drop(),
    t.scheduleds.drop(),
    t.possibles.drop(),
    t.possibleLocations.drop(),
    t.responses.drop(),
    t.users_scheduleds.drop(),
    t.users.create(),
    t.scheduleds.create(),
    t.possibles.create(),
    t.possibleLocations.create(),
    t.responses.create(),
    t.users_scheduleds.create()
  ]);
})
  .then(function (data) {
        // SUCCESS, transaction committed
  })
  .catch(function (error) {
        // ERROR, transaction rolled back
  });  

