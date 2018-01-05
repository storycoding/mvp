var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scoreboard');

const db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() {
  console.log('scoreboard up and running');
});


let playerSchema = new mongoose.Schema({
  _id: String,
  username:  String,
  score: Number
});

let Player = mongoose.model('Player', playerSchema);


let getHighScore = function(callback) {

  Player.find({},
    ['username','score'], // Columns to Return
    {sort:{score: -1}}, //Sort by Date Added DESC
    
    function(err,scoreData){
        console.log('callback successful on scoreData: ', scoreData);
        callback(scoreData); // Do something with the array
    })
};

let saveScore = function(username, score) {

  console.log('saveScore initiated');
  console.log('score = ', score);

  //if it exists update
  //google how to update mongo db document

  //if it doesn't already exist, create new

  let newPlayer = new Player({
    '_id': username,
    'username': username,
    'score': score
  })

  newPlayer.save(function(error) {
    if (error) {
      console.error(error);
    } else {
      console.log(username, ' added to the scoreboard with a score of ', score, '!');
    }
});
}

module.exports.saveScore = saveScore;
module.exports.getHighScore = getHighScore;