var Scrabble = require("../scrabble.js");
var Player = require("../player.js");


describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('Scrabble Score Method', function() {
  it ("Testing basic functionality", function() {
    var scrabble = new Scrabble();
    expect(scrabble.score("word")).toEqual(4+1+1+2);
    expect(scrabble.score("")).toEqual(0);
  });
  xit ("Testing Illegal Characters", function() {
    var scrabble = new Scrabble();
      expect(function() {scrabble.score("@h0me")}).toThrow(new Error ("Illegal Character"));
  });
  xit ("Testing HighestScoreFrom with a list of words",
    function() {
      var scrabble = new Scrabble();
      var wordArray = ["Peter", "Paul", "Mary", "Something", "Zipper"];
      expect (scrabble.highestScoreFrom(wordArray)).toEqual("Zipper");
      expect (scrabble.highestScoreFrom(["wordArray"])).toEqual("wordArray");
    }
  );
  it ("Testing HighestScoreFrom with an invalid argument",
    function() {
      var scrabble = new Scrabble();
      var wordArray = [];
      expect (function() {scrabble.highestScoreFrom(wordArray);}).toThrow("Illegal Argument");
      expect (function() {scrabble.highestScoreFrom(null);}).toThrow("Illegal Argument");
    }
  );

});

describe("Testing Player", function() {
  xit ("Testing constructor", function() {
    var scrabblePlayer = new Player("bobby");
    expect(scrabblePlayer.name).toEqual("bobby");
  });
  xit ("Testing Player play method", function() {
    var scrabblePlayer = new Player("Smithy");
    scrabblePlayer.play("computer");
    expect(scrabblePlayer.plays).toContain("computer");
  });

  xit ("Testing Player totalScore method", function() {
    var scrabblePlayer = new Player("Smithy");
    var myScrabble = new Scrabble();
    var total = 0;
    var list = ["Javascript", "Rox", "My", "Socks"];
    list.forEach(function(word) {
      scrabblePlayer.play(word);
      total += myScrabble.score(word);
    });
    expect(scrabblePlayer.total_score()).toEqual(total);
  });
  xit ("Testing totalScore with no words played", function() {
      var myScrabblePlayer = new Player("Smithy");
      expect(myScrabblePlayer.total_score()).toEqual(0);
  });
  xit ("Testing highscoring word with no words played, should be null", function() {
    var myScrabblePlayer = new Player("Smithy");
    expect(myScrabblePlayer.highestScoringWord()).toEqual(null);
  });
  xit ("Testing highscoring word with one word played, should be that word", function() {
    var myScrabblePlayer = new Player("Smithy");
    myScrabblePlayer.play("Smithy");
    expect(myScrabblePlayer.highestScoringWord()).toEqual("Smithy");
  });
  xit ("Testing highscoring word with several words played", function() {
    var myScrabblePlayer = new Player("Smithy");
    myScrabblePlayer.play("Rover");
    myScrabblePlayer.play("Dropbox");
    myScrabblePlayer.play("Zillow");
    myScrabblePlayer.play("Microsoft");
    expect(myScrabblePlayer.highestScoringWord()).toEqual("Dropbox");
  });
  it ("Testing highestWordScore with several words played", function() {
    var myScrabblePlayer = new Player("Smithy");
    var myScrabble = new Scrabble();
    myScrabblePlayer.play("Rover");
    myScrabblePlayer.play("Dropbox");
    myScrabblePlayer.play("Zillow");
    myScrabblePlayer.play("Microsoft");
    expect(myScrabblePlayer.highestWordScore()).toEqual(myScrabble.score("Dropbox"));
  });
});
