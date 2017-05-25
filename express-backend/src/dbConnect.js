var pgp = require('pg-promise')();

module.exports = () => {
   return pgp('postgres://nick1:password@localhost:5432/tododb');
};



