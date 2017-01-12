
//this file is to try and test queries with inputs using pg-promise
var db = require('./database').db;

var obj = {
  userId: 1,
  time: 331,
  locations: ['a', 'b', 'c']
};

// db.query('UPDATE users SET name = COALESCE(${name}, name), email = COALESCE(${email}, email), bio = COALESCE(${bio}, bio), picture = COALESCE(${picture}, picture) WHERE facebook_id = ${facebookId} AND  (${name} IS DISTINCT FROM name OR ${email} IS DISTINCT FROM email OR ${bio} IS DISTINCT FROM bio OR ${picture} IS DISTINCT FROM picture)', obj);

// db.possibles.getPossibles(obj)
// .then(data => console.log(data));


db.tx(t=>{
  return t.possibles.add({eventTime: +obj.time, userId: +obj.userId})
      .then(p => {
        return t.batch(obj.locations.map(businessId => {
          return t.possibleLocations.add({businessId: businessId, possibleId: p.id});
        }));
      });
})
  .then(data=> console.log(data))
  .catch(error=> console.log(error));


db.possibles.delete(21);
db.possibles.delete(22);