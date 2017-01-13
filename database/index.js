'use strict';
require('dotenv').config();
//might want to use non-default promise library, bluebird seems good
// var promise = require('bluebird');

// Loading all the database repositories separately,
// because event 'extend' is called multiple times:
var repos = {
  possibleLocations: require('./repos/possibleLocations'),
  possibles: require('./repos/possibles'),
  responses: require('./repos/responses'),
  scheduleds: require('./repos/scheduleds'),
  users: require('./repos/users'),
  users_scheduleds: require('./repos/users_scheduleds')
};

// pg-promise initialization options:``
var options = {

    // could select specific promise library here, otherwise default ES6
//   promiseLib: promise,

    // Extending the database protocol with our custom repositories:
  extend: obj => {
        // 1. Do not use 'require()' here, because this event occurs for every task
        //    and transaction being executed, which should be as fast as possible.
        // 2. We pass in `pgp` in case it is needed when implementing the repository;
        //    for example, to access namespaces `.as` or `.helpers`
    obj.possibleLocations = repos.possibleLocations(obj, pgp);
    obj.possibles = repos.possibles(obj, pgp);
    obj.responses = repos.responses(obj, pgp);
    obj.scheduleds = repos.scheduleds(obj, pgp);
    obj.users = repos.users(obj, pgp);
    obj.users_scheduleds = repos.users_scheduleds(obj, pgp);
  }

};

// Database connection parameters:
//might want to add config.js/env variables for this
// var config = {
//   host: 'localhost',
//   port: 5432,
//   database: 'nokkangendb'
// };

var config = {
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  database: process.env.DB_DATABASE || 'nokkangendb',
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};



// Load and initialize pg-promise:
var pgp = require('pg-promise')(options);

// Create the database instance:
var db = pgp(config);

//could run database diagnostics here if we want
//this is a tool we might consider using (from same creator as pg-promise): https://github.com/vitaly-t/pg-monitor

// If we ever need to change the default pool size, can do it like this:
// pgp.pg.defaults.poolSize = 20;

module.exports = {

    // Library instance is often necessary to access all the useful
    // types and namespaces available within the library's root:
  pgp,

    // Database instance. Only one instance per database is needed
    // within any application.
  db
};
