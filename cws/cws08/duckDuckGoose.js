// Task:

// Given an array of Player objects and a position (first position is 1),
// return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

// function duckDuckGoose(players, goose) {
//   for (var i = 0; i < players.length; i++) {
//     if (i === (goose-1) % players.length) {
//       return players[i].name;
//     }
//   }
// }

duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

// console.log(duckDuckGoose(players, 1));
// console.log(duckDuckGoose(players, 10));
console.log(duckDuckGoose(players, 20));
