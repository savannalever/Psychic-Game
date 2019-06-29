var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "K", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = 0;
var guessedLetters = [];


var winsd = document.getElementById("winsd");
var lossesd = document.getElementById("lossesd");
var guessesd = document.getElementById("guessesd");
var alreadyg = document.getElementById("alreadyg");



document.onkeyup = function (event) {
    var userGuess = event.key;
    
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(compGuess);

   
    if (userGuess === compGuess) {
        wins++;
        guessesLeft = 9;
        yourGuesses = "";
        guessedLetters = [];
        
    }
    else {
        guessesLeft--;
        yourGuesses++;
        guessedLetters.push(userGuess);
    }
    
    if (guessesLeft < 1) {
        losses++;
        
    }
    if ((guessesLeft === 0) || (yourGuesses === 10)) {
        guessesLeft = 9;
        yourGuesses = 0;
        guessedLetters = [];
    }
    document.getElementById("winsd").innerHTML = "Wins: " + wins;
    document.getElementById("lossesd").innerHTML = "losses: " + losses;
    document.getElementById("guessesd").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("alreadyg").innerHTML = "Guessed Letters: " + guessedLetters;
    // console.log(guessedLetters);
};
