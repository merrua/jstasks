// Sentence Smash

// Write a function that takes an array of words
// and smashes them together into a sentence
// and returns the sentence.
// You can ignore any need to sanitize words or
// add punctuation,
// but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning
// or the end of the sentence!
// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// Assumptions

//     You can assume that you are only given words.
//     You cannot assume the size of the array.
//     You can assume that you do get an array.

function smash(words) {
  if (!words || words.length === 0) {
    return "";
  }
  return words.join(" ").trim();
}

console.log(smash([]));
console.log(smash(["hello", "world"]));
console.log(smash(["  hello", "world  "]));
