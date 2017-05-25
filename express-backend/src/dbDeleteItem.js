const dbConnect = require('./dbConnect');

module.exports = (req, res) => {
  //only creates db object when API is called
  const db = dbConnect();

  if (req){ //condition for detlete
    deleteItem(req, res, db);
  } 
  else {
    res.status(400).send("No information to identify item to delete").end();
  }
}

function deleteItem(req, res, db){
  return db.result("DELETE FROM todotable WHERE task_id = "+ 2) //replace integer with value from req
    .then(result => {
      console.log(result.rowCount); //print how many items were deleted
      res.status(200).send("successfully removed item from db.").end();
    })
    .catch(err => {
      console.log('ERR: ', err);
    })
}