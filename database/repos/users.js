'use strict';

var sql = require('../sql').users;

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

        //add dummy data
    init: () => 
        rep.manyOrNone(sql.init),

        //retrieves all potential matches (that haven't been seen yet) for a user at a specific time
    matches: values => 
      rep.manyOrNone(sql.matches, values),

      //checks if the user has a match for a specific time
    checkMatch: values =>
        rep.oneOrNone(sql.checkMatch, values),
        
        //gets information about a single user 
    getUser: values =>
        rep.oneOrNone(sql.getUser, values),
        
        //creates a new user entry
    addUser: values =>
        rep.one(sql.add, values),
    
        //updates an existing user entry--if inputs any are null, will keep current values
    update: values =>
        rep.none(sql.update, values),
    
    //gets all scheduled matches for a single user
    getAllScheduledMatches: values =>
        rep.manyOrNone(sql.getAllScheduledMatches, values)
    
            
  };
};
