// Description:

// Replace all vowel to exclamation mark
// in the sentence. aeiouAEIOU is vowel.
// return the result
// Examples

// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

function replaceVowel(s) {
  return s.replaceAll(/[aeiouAEIOU]/g, "!");
}

console.log(replaceVowel("Hi!"));
console.log(replaceVowel("!Hi! Hi!"));
console.log(replaceVowel("aeiou"));
console.log(replaceVowel("ABCDE"));
console.log(replaceVowel("ABCDE]"));
