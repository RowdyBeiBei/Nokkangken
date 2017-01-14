var db = require('../../../database').db;

//receives a users preference about another user, checks for matches, if match found, creates scheduled event
// input format {wouldJoin: wouldJoin, userId: id(current user), eventTime: eventTime, prospectId: id(of person being voted on),
  //  businessId: businessId(the location they will meet at if matched, returned as part of the query when matches are found) }
exports.submitResponse = (req, res) => {
  db.tx(t=>{ 
    return t.responses.add({wouldJoin: req.body.wouldJoin, userId: +req.body.userId, eventTime: +req.body.eventTime, prospectId: +req.body.prospectId})
      .then(() => {
        return t.users.checkMatch({userId: +req.body.userId, eventTime: +req.body.eventTime});
      })
      .then(match => {
        if (match === null) {
            //if no match is found, return without doing anything;
          return 'No Match Found';
        } else {
            //if a match is found, an event needs to be scheduled, users need to be referenced to it and relevant possible events need to be deleted. 
          return t.scheduleds.add({eventTime: +req.body.eventTime, businessId: req.body.businessId})
          .then(scheduled => {
            return t.batch([
              t.users_scheduleds.add({userId: +req.body.userId, scheduledId: scheduled.id}),
              t.users_scheduleds.add({userId: +req.body.prospectId, scheduledId: scheduled.id}),
              t.possibles.getAPossible({userId: +req.body.userId, eventTime: +req.body.eventTime}),
              t.possibles.getAPossible({userId: +req.body.prospectId, eventTime: +req.body.eventTime})
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
.then(results => res.status(200).send(results) )
.catch(error => res.status(400).send(error));

};
