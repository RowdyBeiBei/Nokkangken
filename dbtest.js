
//this file is to try and test queries with inputs using pg-promise
var db = require('./database').db;

var obj = {
  userId: 1
};

// db.query('UPDATE users SET name = COALESCE(${name}, name), email = COALESCE(${email}, email), bio = COALESCE(${bio}, bio), picture = COALESCE(${picture}, picture) WHERE facebook_id = ${facebookId} AND  (${name} IS DISTINCT FROM name OR ${email} IS DISTINCT FROM email OR ${bio} IS DISTINCT FROM bio OR ${picture} IS DISTINCT FROM picture)', obj);

db.possibles.getPossibles(obj)
.then(data => console.log(data));


db.tx(t=>{
  return t.possibles.getPossibles({userId: obj.userId})
    .then(possibles => {
      return t.batch(possibles.map(p => {
        console.log('data', p.id_user, p.possibletime);
        return t.users.matches({userId: p.id_user, eventTime: p.possibletime});
      }));
    });
})
  .then(data=> console.log(data))
  .catch(error=> console.log(error));
