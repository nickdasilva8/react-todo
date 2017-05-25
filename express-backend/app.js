const express = require('express');
const app = express();
// const db = require('./src/dbConnect.js');
const dbInsertItem = require('./src/dbInsertItem');
const dbRetrieveList = require('./src/dbRetrieveList');
const dbDeleteItem = require('./src/dbDeleteItem');

console.log("application has started");

var dummyData = {
  todo: {
    "1":"item 1",
    "2":"item 2",
    "3":"item 3",
    "name":"Name Here"
  }
};

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/todo-get', function(req, res){
  console.log("/todo-GET: received data\n");
  dbRetrieveList(req, res);
})

app.post('/todo-insert', function(req, res){ 
  console.log("/todo-INSERT: received data\n");
  dbInsertItem(req, res);
});

app.post('/todo-delete', function(req, res){ 
  console.log("/todo-DELETE: received data\n");
  dbDeleteItem(req, res);
});


app.listen(3051, function(){
  console.log("Listening on port 3051");
})


// var test = db();
// test.any('SELECT * FROM todotable')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// dbAddToList("Added from app.js");