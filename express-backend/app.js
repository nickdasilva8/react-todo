const express = require('express');
const app = express();
// const db = require('./src/dbConnect.js');
const dbInsertItem = require('./src/dbInsertItem');
const dbRetrieveList = require('./src/dbRetrieveList');
const dbDeleteItem = require('./src/dbDeleteItem');

console.log("application has started");

// Add header.
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

/**
 * Entry point to application for GET statements requesting the full list of todo's
 * @param {json} req - holds all the incoming data from the request 
 * @param {json} res - the response object
 */
app.get('/todo-get', function(req, res){
  console.log("/todo-GET: received data\n");
  dbRetrieveList(req, res);
})

/**
 * Entry point to application for POST statements which will pass over todo item to be inserted
 * @param {json} req - holds all the incoming data from the request 
 * @param {json} res - the response object
 */
app.post('/todo-insert', function(req, res){ 
  console.log("/todo-INSERT: received data\n");
  dbInsertItem(req, res);
});

/**
 * Entry point to application for POST statements which will inform nodejs which database entry to delete
 * @param {json} req - holds all the incoming data from the request 
 * @param {json} res - the response object
 */
app.post('/todo-delete', function(req, res){ 
  console.log("/todo-DELETE: received data\n");
  dbDeleteItem(req, res);
});

/**
 * Exposed port 3051, as all the standard ports were being used on my machine already
 */
app.listen(3051, function(){
  console.log("Listening on port 3051");
});