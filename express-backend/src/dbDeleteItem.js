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

  if (req){ //condition for delete, something liked itemId = req["body"]["todo"]["delete"]
    deleteItem(req, res, db);
  } else {
    res.status(400)
    .send("No information to identify item to delete")
    .end();
  }
}

/**
 * DeleteItem is used to delete a single item from the PostgreSQL database
 * The key for which item to delete should be stored inside of req.
 * Depeding on how the req is built, it woudl be accessed something like:
 * //let itemId = req["body"]["todo"]["id"];
 * @param {json} req - holds all the incoming data from the request 
 * @param {json} res - the response object
 * @param {object} db  - database object, allowing the db to be accessed
 * @return {response} - status code, informing success of deleteItem
 */
function deleteItem(req, res, db){
  return db.result("DELETE FROM todotable WHERE task_id = "+ 2) //replace integer with value from req
    .then(result => {
      console.log(result.rowCount); //print how many items were deleted
      res.status(200)
      .send("successfully removed item from db.")
      .end();
    })
    .catch(err => {
      console.log('ERR: ', err);
    })
}