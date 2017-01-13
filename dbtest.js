
//this file is to try and test queries with inputs using pg-promise
var db = require('./database').db;

var obj = {
  wouldJoin: true,
  userId: 3,
  eventTime: 10,
  prospectId: 1,
  businessId: 'c'
};

// db.query('UPDATE users SET name = COALESCE(${name}, name), email = COALESCE(${email}, email), bio = COALESCE(${bio}, bio), picture = COALESCE(${picture}, picture) WHERE facebook_id = ${facebookId} AND  (${name} IS DISTINCT FROM name OR ${email} IS DISTINCT FROM email OR ${bio} IS DISTINCT FROM bio OR ${picture} IS DISTINCT FROM picture)', obj);





db.tx(t=>{ 
  return t.responses.add({wouldJoin: obj.wouldJoin, userId: +obj.userId, eventTime: +obj.eventTime, prospectId: +obj.prospectId})
      .then(() => {
        return t.users.checkMatch({userId: +obj.userId, eventTime: +obj.eventTime});
      })
      .then(match => {
        if (match === null) {
            //if no match is found, return without doing anything;
          return;
        } else {
            //if a match is found, an event needs to be scheduled, users need to be referenced to it and relevant possible events need to be deleted. 
          return t.scheduleds.add({eventTime: +obj.eventTime, businessId: obj.businessId})
          .then(scheduled => {
            return t.batch([
              t.users_scheduleds.add({userId: +obj.userId, scheduledId: scheduled.id}),
              t.users_scheduleds.add({userId: +obj.prospectId, scheduledId: scheduled.id}),
              t.possibles.getAPossible({userId: +obj.userId, eventTime: +obj.eventTime}),
              t.possibles.getAPossible({userId: +obj.prospectId, eventTime: +obj.eventTime})
            ]);
          })
          .then( data => {
            return t.batch([
              t.possibles.delete(data[2].id),
              t.possibles.delete(data[3].id)
            ]);
          });
        }
      });
})
.then(results => console.log('results', results) )
.catch(error => console.log('error', error));


















// db.users.checkMatch(obj)
//   .then(result => console.log(result === null))
//   .catch(error => console.log('whoops', error));


// db.possibles.getPossibles(obj)
// .then(data => console.log(data));


// db.tx(t=>{
//   return t.possibles.add({eventTime: +obj.time, userId: +obj.userId})
//       .then(p => {
//         return t.batch(obj.locations.map(businessId => {
//           return t.possibleLocations.add({businessId: businessId, possibleId: p.id});
//         }));
//       });
// })
//   .then(data=> console.log(data))
//   .catch(error=> console.log(error));


// db.possibles.delete(21);
// db.possibles.delete(22);