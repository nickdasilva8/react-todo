const express = require('express');
const app = express();

console.log("application has started");

app.listen(3051, function(){
  console.log("Listening on port 3051");
})


app.all('/todo-get', function(req, res){
  console.log("received data on /todo-get\n");
  res.status(200).send("Successfully received GET statement.").end();
})