var pgp = require('pg-promise')();

/**
 * When this document is called, it will return a database object.
 * eg
 *              const dbConnect = require('./dbConnect');
 *              const db = dbConnect();
 * 
 * @return {object} - Database Object
 */
module.exports = () => {
   return pgp('postgres://nick1:password@localhost:5432/tododb');
};



