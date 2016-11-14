var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.score = function(word) {
    var uppercase = word.toUpperCase().split('');
    var score = 0;
    uppercase.forEach(function(letter) {
        //console.log('Going through ' + letter)
        switch (letter) {
          case 'A':
          case 'E':
          case 'I':
          case 'O':
          case 'U':
          case 'L':
          case 'N':
          case 'R':
          case 'S':
          case 'T':
          	 score += 1;
             break;
          case 'D':
          case 'G':
          	 score += 2;
             break;
          case 'B':
          case 'C':
          case 'M':
          case 'P':
          	 score += 3;
             break;
          case 'F':
          case 'H':
          case 'V':
          case 'W':
          case 'Y':
          	 score += 4;
             break;
          case 'K':
          	 score += 5;
             break;
          case 'J':
          case 'X':
          	 score += 8;
             break;
          case 'Q':
          case 'Z':
          	 score += 10;
             break;
          default: throw new Error("Illegal Character");
        }
    });
    return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  if (! Array.isArray(arrayOfWords) || arrayOfWords.length < 1)
    throw "Illegal Argument";

  var highestWord = "";
  var highScore = 0;
  var that = this;
  arrayOfWords.forEach(function(word) {
    var currentScore = that.score(word);
    if (currentScore > highScore) {
      highestWord = word;
    }
  });
  return highestWord;
};

// var myScrabble = new Scrabble();
//
// var wordArray = ["Peter", "Paul", "Mary", "Something", "Zipper"];
// for (var i = 0; i < wordArray.length; i++) {
//   console.log(wordArray[i] + " = " + myScrabble.score(wordArray[i]));
// }




module.exports = Scrabble;
