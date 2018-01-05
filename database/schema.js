var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scoreboard');

const db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() {
  console.log('scoreboard up and running');
});


let playerSchema = new mongoose.Schema({
  username:  String,
  score: Number
});

let Player = mongoose.model('Player', playerSchema);

let saveScore = function(username,score) {
  console.log('saveScore initiated');
  let newPlayer = new Player({
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