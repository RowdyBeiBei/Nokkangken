
//this file is to try and test queries with inputs using pg-promise
var db = require('./database').db;

var obj = {
  facebookId: 17,
  name: 'Jonny',
  email: null,
  bio: 'I am a real cool MAN',
  picture: null
};

db.query('UPDATE users SET name = COALESCE(${name}, name), email = COALESCE(${email}, email), bio = COALESCE(${bio}, bio), picture = COALESCE(${picture}, picture) WHERE facebook_id = ${facebookId} AND  (${name} IS DISTINCT FROM name OR ${email} IS DISTINCT FROM email OR ${bio} IS DISTINCT FROM bio OR ${picture} IS DISTINCT FROM picture)', obj);
