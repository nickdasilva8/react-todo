const dbConnect = require('./dbConnect');

module.exports = (req, res) =>{
  //only creates db object when API is called
  const db = dbConnect();
  //need to think of a better way to determine this..
  if (req){
    retreiveItems(db, res);
  } else {
    res.status(400).send("No data in 'description' of task").end();
  }
}

function retreiveItems(db, res){
  return db.any('SELECT * FROM todotable')
    .then((data) => {
      console.log(data);
      res.status(200).send(data).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Unable to retrieve any documents from db. Err: "+err).end();
    })
}