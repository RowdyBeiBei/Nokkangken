var db = require('../../../database').db;

// receives a users preference about another user, checks for matches, if match found, creates scheduled event
// input format {wouldJoin: wouldJoin, userId: id(current user), eventTime: eventTime, prospectId: id(of person being voted on),
// businessId: businessId(the location they will meet at if matched, returned as part of the query when matches are found) }
exports.submitResponse = (req, res) => {
    db.tx(function *(t) => {

        yield t.responses.add({wouldJoin: req.body.wouldJoin, userId: +req.body.userId, eventTime: +req.body.eventTime, prospectId: +req.body.prospectId});

        let match = yield t.users.checkMatch({userId: +req.body.userId, eventTime: +req.body.eventTime});

        if (!match) {
            // if no match is found, return without doing anything;
            return 'No Match Found';
        }

        // if a match is found, an event needs to be scheduled, users need to be referenced to it and relevant possible events need to be deleted.
        let scheduled = yield t.scheduleds.add({eventTime: +req.body.eventTime, businessId: req.body.businessId});

        let batch = yield t.batch([
            t.users_scheduleds.add({userId: +req.body.userId, scheduledId: scheduled.id}),
            t.users_scheduleds.add({userId: +req.body.prospectId, scheduledId: scheduled.id}),
            t.possibles.getAPossible({userId: +req.body.userId, eventTime: +req.body.eventTime}),
            t.possibles.getAPossible({userId: +req.body.prospectId, eventTime: +req.body.eventTime})
        ]);

        return yield t.batch([
            t.possibles.delete(batch[2].id),
            t.possibles.delete(batch[3].id)
        ]);
    })
        .then(results => res.status(200).send(results))
        .catch(error => res.status(400).send(error));
};
