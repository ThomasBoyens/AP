const readline = require("readline-sync");
const User = require("./User");
const game = require("./Game");
const ScoreBoard = require("./Scoreboard");

const user = new User();
user.naam = readline.question("What's your name?");
user.voornaam = readline.question("What's your firstname?")
const getal = readline.question("Over welk getal wil je sommen oplossen?");
const aantalSommen = readline.question("Hoeveel sommen wil je oplossen?");

var g = new game(aantalSommen,getal);
g.CreateGame();
g.PlayGame();
g.Evaluate();

const scoreboard = new ScoreBoard(user,g.score, aantalSommen);
scoreboard.Print();