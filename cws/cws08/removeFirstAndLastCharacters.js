// Remove First and Last Character
// Task

// Your goal is to create a function that
// removes the first and last characters of a string.
// You're given one parameter, the original string.

// Important: Your function should handle strings
// of any length ≥ 2 characters.
// For strings with exactly 2 characters, return an empty string.

function removeChar1(str) {
  if (str.length <= 2) {
    return "";
  } else {
    let r = "";
    for (let i = 1; i < str.length - 1; i++) {
      r += str[i];
    }
    return r;
  }
}

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("eloquent")); // -> 'loquen'
console.log(removeChar("country")); // -> 'ountr'
console.log(removeChar("person")); // -> 'erso'
console.log(removeChar("ab")); // -> '' (empty string)
console.log(removeChar("xyz")); // -> 'y'
