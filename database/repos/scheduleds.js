'use strict';

var sql = require('../sql').scheduleds;

//include library as parameter in case its functions are needed
module.exports = (rep, pgp) => {

    //return functions that will be used to extend the database object
    //these can then be combined anywhere the database is present (in tasks/transactions for example)

  return {

        // Creates the table;
    create: () =>
            rep.none(sql.create),

        // Drops the table;
    drop: () =>
            rep.none(sql.drop),

        // Removes all records from the table;
    empty: () =>
            rep.none(sql.empty),
    
    //adds a single event to the scheduleds table
    add: values =>
        rep.one(sql.add, values),
    
    //retrieves all the scheduled events for a user (only returns id, time, businessId of the event)
    getEvents: values =>
        rep.manyOrNone(sql.getEvents, values)
  };
};
