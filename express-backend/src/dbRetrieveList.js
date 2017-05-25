//Imports the file which creates the database object.
const dbConnect = require('./dbConnect');

/**
 * Exposting the document means the if/else if called immediately when this document
 * is called else where.
 * @param {json} req - holds all the incoming data from the request 
 * @param {json} res - the response object
 */
module.exports = (req, res) =>{
  //only creates db object when API is called
  const db = dbConnect();

  if (req){ //condition for retrieve.
    retreiveItems(db, res);
  } else {
    res.status(400).send("No data in 'description' of task").end();
  }
}

/**
 * retrieveItems is used to retrieve all the items from the database.
 * Ideally, this should be setup as an ajax call which continiously keeps the todo app up to date.
 * @param {json} res - the response object
 * @param {object} db  - database object, allowing the db to be accessed
 * @return {json} - returns a JSON of all the todo items in the database.
 */
function retreiveItems(db, res){
  return db.any('SELECT * FROM todotable')
    .then((data) => {
      console.log(data);
      res.status(200)
      .send(data)
      .end();
    })
    .catch((err) => {
      console.log(err);
      res.status(400)
      .send("Unable to retrieve any documents from db. Err: "+err)
      .end();
    })
}