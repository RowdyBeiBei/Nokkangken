var db = require('./database').db;
var QueryFile = require('pg-promise').QueryFile;

var seedDb = new QueryFile('./seed.sql');
db.any(seedDb);