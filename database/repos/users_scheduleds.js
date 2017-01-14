'use strict';

var sql = require('../sql').users_scheduleds;

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

    add: values =>
        rep.one(sql.add, values),

    //retrieves all of the user ids (other than that of the active user) for a specific event, doesn't return any additional user info
    //expects one or many users to be returned, but not zero
    getEventUsers: values =>
        rep.many(sql.getEventUsers, values)
  };
};
