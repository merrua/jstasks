let words = [];
let word = "";

while (word != "stop") {
  word = prompt("Enter a word:");
  if (word != "stop") {
    words.push(word);
  }
}

console.log(`${words}`);
