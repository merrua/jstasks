// When provided with a letter,
// return its position in the alphabet.

// Input :: "a"
// Output :: "Position of alphabet: 1"
// Note: Only lowercased English letters are tested

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let position = alphabet.indexOf(letter) + 1;
  return `Position of alphabet: ${position}`;
}

// var position = d => `Position of alphabet: ${d.charCodeAt()-96}`

console.log(position("a"));
