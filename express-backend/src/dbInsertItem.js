const dbConnect = require('./dbConnect');

module.exports = (req, res) => {
  //only creates db object when API is called
  const db = dbConnect();

  if (req){ //need to create post to verify what the req condition is
    insertItem(req, res, db);
  } else {
    res.status(400).send("No information to insert").end();
  }
}

function insertItem(req, res, db){
    
  return db.none("INSERT INTO todotable (task_desc) VALUES('"+description+"')")
    .then(() => {
      console.log("successfully inserted todo. ");
      res.status(201).send("line 26 bro").end();
    })
    .catch(err => {
      console.log("err on 'dbConnect.js' on insert");
      console.log(err);
      res.status(400).send("Unable to insert document into db. Err: "+err).end();
    });
}
