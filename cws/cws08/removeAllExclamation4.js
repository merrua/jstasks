// Remove all exclamation marks from sentence
// but ensure a exclamation mark at the end of string.
// you can assume that the input data is always a non empty string

// const remove = s => s.replace(/!+/g, "")+"!";

// function remove(s) {
//   return s.replace(/!+/g, '') + '!';
// }

function remove(string1) {
  let str = string1.split("!").join("");
  return str + "!";
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
