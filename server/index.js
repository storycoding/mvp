const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
let db = require('../database/schema.js'); // continue here
 
const app = express();

app.use(parser.json());

let staticPage = path.join(__dirname, '../client/dist');

//console.log('static page link: ', staticPage); // all good

app.use(express.static(staticPage));

//wait for get requests from client
app.get('/scoreboard', function(req,res) {

  console.log('request sent to db');
  db.getHighScore(function(data){
    res.send(data);
  })
});

app.post('/scoreboard', function (req, res) {

  console.log('request body received from client to server: ', req.body);
  //request.post('http://service.com/upload', req})

  db.saveScore(req.body.username, req.body.score);
  res.send(`POST request to the homepage`)
  //make db call
})

app.listen(8080, () => console.log('listening on port 8080!')) // is this redundant because of how I run nodemon?