
//this file is to try and test queries with inputs using pg-promise
var db = require('./database').db;

var obj = {
  facebook_id: 1,
  name: 'Jonny',
  bio: 'I am a real cool guy'
};

db.query(db.format(UPDATE Users SET (${this~}) = (${name}, ${bio}, ${picture})
WHERE facebook_id = ${facebook_id}), obj);
