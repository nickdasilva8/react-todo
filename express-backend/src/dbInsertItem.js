//Imports the file which creates the database object.
const dbConnect = require('./dbConnect');

/**
 * Exposting the document means the if/else if called immediately when this document
 * is called else where.
 * @param {json} req - holds all the incoming data from the request 
 * @param {json} res - the response object
 */
module.exports = (req, res) => {
  //only creates db object when API is called
  const db = dbConnect();

  if (req){ //condition for delete, something liked itemId = req["body"]["todo"]["insert"]
    insertItem(req, res, db);
  } else {
    res.status(400)
    .send("No information to insert")
    .end();
  }
}
/**
 * insertItem is used to insert a single item into the PostgreSQL database.
 * All that is required, is the description of the "todo" task.
 * The ID for the task auto incremenets.
 * Description in req could be somewhere like:
 * //let task_desc = req["body"]["todo"]["description"];
 * @param {json} req - holds all the incoming data from the request 
 * @param {json} res - the response object
 * @param {object} db  - database object, allowing the db to be accessed
 * @return {response} - status code, informing success of isertItem
 */
function insertItem(req, res, db){
  return db.none("INSERT INTO todotable (task_desc) VALUES('"+description+"')")
    .then(() => {
      res.status(201)
      .send("line 26 bro")
      .end();
    })
    .catch(err => {
      res.status(400)
      .send("Unable to insert document into db. Err: "+err)
      .end();
    });
}
