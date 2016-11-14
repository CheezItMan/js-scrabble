// player.js
var Scrabble = require("./scrabble.js");

var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.myScrabble = new Scrabble();
};

Player.prototype.play = function(word) {
  if (!this.hasWon()){
    this.plays.push(word);
    return true;
  }
  else {
    return false;
  }

};

Player.prototype.total_score = function() {
  var score = 0;

  for (var i = 0 ; i < this.plays.length; i++) {
    score += this.myScrabble.score(this.plays[i]);
  }
  return score;
};

Player.prototype.hasWon = function() {
  return this.total_score() > 100;
}

Player.prototype.highestScoringWord = function() {
  var answer = null;
  var highestScore = 0;
  var that = this;
  this.plays.forEach(function(word) {
    var currentScore = that.myScrabble.score(word);
    if (currentScore > highestScore) {
      answer = word;
      highestScore = currentScore;
    }
  });
  return answer;
}

Player.prototype.highestWordScore = function() {
  return this.myScrabble.score(this.highestScoringWord());
}

module.exports = Player;
