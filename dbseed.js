var db = require('./database').db;

db.tx(function (t) {
  return t.batch([
    t.users.empty(),
    t.scheduleds.empty(),
    t.possibles.empty(),
    t.possibleLocations.empty(),
    t.responses.empty(),
    t.users_scheduleds.empty(),
    t.users.init(),
    t.possibles.init(),
    t.possibleLocations.init(),
    t.responses.init()
  ]);
})
  .then(function (data) {
        // SUCCESS, transaction committed
    console.log('success');
  })
  .catch(function (error) {
        // ERROR, transaction rolled back
    console.log('I HATE YOU', error);
  });  