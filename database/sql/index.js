'use strict';

var QueryFile = require('pg-promise').QueryFile;
var path = require('path');

// function to create QueryFiles to be exported;
function sql(file) {

  var fullPath = path.join(__dirname, file); // generating full path;

  var options = {
        
    minify: true

  };

  return new QueryFile(fullPath, options);
}

//generate minified/formatted queryfiles from our raw sql files and export the results
module.exports = {
  possibleLocations: {
    create: sql('possibleLocations/create.sql'),
    empty: sql('possibleLocations/empty.sql'),
    drop: sql('possibleLocations/drop.sql'),
    init: sql('possibleLocations/init.sql'),
    add: sql('possibleLocations/add.sql')
  },
  possibles: {
    create: sql('possibles/create.sql'),
    empty: sql('possibles/empty.sql'),
    drop: sql('possibles/drop.sql'),
    init: sql('possibles/init.sql'), 
    add: sql('possibles/add.sql'),
    getPossibles: sql('possibles/getPossibles.sql'),
    getAPossible: sql('/possibles/getAPossible.sql'),
    delete: sql('possibles/delete.sql')
  },
  responses: {
    create: sql('responses/create.sql'),
    empty: sql('responses/empty.sql'),
    drop: sql('responses/drop.sql'),
    init: sql('responses/init.sql'),
    add: sql('responses/add.sql')
  },
  scheduleds: {
    create: sql('scheduleds/create.sql'),
    empty: sql('scheduleds/empty.sql'),
    drop: sql('scheduleds/drop.sql'),
    add: sql('scheduleds/add.sql'),
    getEvents: sql('scheduleds/getEvents.sql')
  },
  users: {
    create: sql('users/create.sql'),
    empty: sql('users/empty.sql'),
    drop: sql('users/drop.sql'),
    init: sql('users/init.sql'),
    matches: sql('users/matches.sql'),
    checkMatch: sql('users/checkMatch.sql'),
    getUser: sql('users/getUser.sql'),
    add: sql('users/add.sql'),
    update: sql('users/update.sql'),
    getAllScheduledMatches: sql('users/getAllScheduledMatches.sql')
  },
  users_scheduleds: {
    create: sql('users_scheduleds/create.sql'),
    empty: sql('users_scheduleds/empty.sql'),
    drop: sql('users_scheduleds/drop.sql'),
    add: sql('users_scheduleds/add.sql'),
    getEventUsers: sql('users_scheduleds/getEventUsers.sql')
  }
  

};

