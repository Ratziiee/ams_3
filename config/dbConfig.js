const constants = require('../config/constants');

const initOptions = {
    capSQL: true // generate capitalized SQL 
};
// console.log(constants);
var config = {
    host:constants.main_obj.db.host,
    user: constants.main_obj.db.user,
    database: constants.main_obj.db.dbName,
    password:constants.main_obj.db.pwd, 
    port: constants.main_obj.db.port,
    max: constants.main_obj.db.maxConnections, // max number of connection can be open to database
    idleTimeoutMillis: constants.main_obj.db.idleTimeoutMillis, // how long a client is allowed to remain idle before being closed
  };


const pgp = require('pg-promise')(initOptions);
const db = pgp(config);
const pg = require('pg');
const pool = new pg.Pool(config);
  module.exports = {
    pgp, db, pg, pool
};

