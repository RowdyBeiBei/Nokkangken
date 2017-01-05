var db = require('./database').db;
var QueryFile = require('pg-promise').QueryFile;

var refreshDb = new QueryFile('./schema.sql');
db.none(refreshDb);






//if we wanted to use methods we have added to db
//this seems less efficient. Also, if we don't use these functions
//we could just remove them

// db.users.drop()
// .then( db.scheduleds.drop)
// .then( db.possibles.drop)
// .then(db.possibleLocations.drop)
// .then(db.responses.drop)
// .then(db.users_scheduleds.drop)
// .then(db.users.create)
// .then( db.scheduleds.create)
// .then( db.possibles.create)
// .then(db.possibleLocations.create)
// .then(db.responses.create)
// .then(db.users_scheduleds.create);
