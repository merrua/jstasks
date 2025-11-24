//  You will be given valid moves of two Rock, Paper, Scissors players,
//   and have to return which player won: "Player 1 won!"
//   for player 1, and "Player 2 won!" for player 2.
//   In case of a draw return Draw!.

// const rps = (p1, p2) => {
//   if (p1.toLowerCase() === p2.toLowerCase()) {
//     return "Draw!";
//   } else if (p1.toLowerCase() === "paper" && p2.toLowerCase() === "rock") {
//     return "Player 1 won!";
//   } else if (p1.toLowerCase() === "paper" && p2.toLowerCase() === "scissors") {
//     return "Player 2 won!";
//   } else if (p1.toLowerCase() === "scissors" && p2.toLowerCase() === "paper") {
//     return "Player 1 won!";
//   } else if (p1.toLowerCase() === "scissors" && p2.toLowerCase() === "rock") {
//     return "Player 2 won!";
//   } else if (p1.toLowerCase() === "rock" && p2.toLowerCase() === "scissors") {
//     return "Player 1 won!";
//   } else if (p1.toLowerCase() === "rock" && p2.toLowerCase() === "paper") {
//     return "Player 2 won!";
//   }
// };

const rps = (p1, p2) => {
  if (p1.toLowerCase() == p2.toLowerCase()) return "Draw!";

  if (p1.toLowerCase() == "rock" && p2.toLowerCase() == "scissors")
    return "Player 1 won!";
  else if (p1.toLowerCase() == "scissors" && p2.toLowerCase() == "paper")
    return "Player 1 won!";
  else if (p1.toLowerCase() == "paper" && p2.toLowerCase() == "rock")
    return "Player 1 won!";
  else return "Player 2 won!";
};

console.log(rps("rock", "rock"));
console.log(rps("paper", "rock"));
