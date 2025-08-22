// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors

function getRandomChoice() {
  let random = Math.random();
  if (random <= 0.2) {
    return "Scissors";
  } else if (random <= 0.4 && random > 0.2) {
    return "Paper";
  } else if (random <= 0.6 && random > 0.4) {
    return "Rock";
  } else if (random <= 0.8 && random > 0.6) {
    return "Lizard";
  } else {
    return "Spock";
  }
}

function playGame(choice) {
  let botChoice = getRandomChoice().toLowerCase();
  if (choice.toLowerCase() === botChoice.toLowerCase()) {
    return "Tie";
  }
  if (
    (choice.toLowerCase() === "rock" && botChoice === "scissors") ||
    (choice.toLowerCase() === "rock" && botChoice === "lizard") ||
    (choice.toLowerCase() === "spock" && botChoice === "scissors") ||
    (choice.toLowerCase() === "spock" && botChoice === "rock") ||
    (choice.toLowerCase() === "paper" && botChoice === "rock") ||
    (choice.toLowerCase() === "paper" && botChoice === "spock") ||
    (choice.toLowerCase() === "scissors" && botChoice === "paper") ||
    (choice.toLowerCase() === "scissors" && botChoice === "lizard") ||
    (choice.toLowerCase() === "lizard" && botChoice === "spock") ||
    (choice.toLowerCase() === "lizard" && botChoice === "paper")
  ) {
    return `${choice} wins against ${botChoice}`;
  } else if (
    (choice.toLowerCase() === "rock" && botChoice === "paper") ||
    (choice.toLowerCase() === "rock" && botChoice === "spock") ||
    (choice.toLowerCase() === "paper" && botChoice === "scissors") ||
    (choice.toLowerCase() === "paper" && botChoice === "lizard") ||
    (choice.toLowerCase() === "scissors" && botChoice === "rock") ||
    (choice.toLowerCase() === "scissors" && botChoice === "spock") ||
    (choice.toLowerCase() === "lizard" && botChoice === "rock") ||
    (choice.toLowerCase() === "lizard" && botChoice === "scissors") ||
    (choice.toLowerCase() === "spock" && botChoice === "lizard") ||
    (choice.toLowerCase() === "spock" && botChoice === "paper")
  ) {
    return `${choice} loses against ${botChoice}`;
  }
  return `error: ${choice} ${botChoice}`;
}

console.log(playGame("paper"));
