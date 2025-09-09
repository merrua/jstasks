// Write a function that will compare two values,
// one will be a number and one will be a string.
// Return true if they are the same character (regardless of their different data types)
// and return false if they are not.
// not allowed to use .toString(), .join(), .split(), parseInt and .Number().

// function add(a, b) {
//   if ((a === "" && b !== "") || (a !== "" && b === "")) {
//     return false;
//   }
//   return String(a) === String(b);
// }

const add = (a, b) => a == b;

console.log(add("1", 1));
console.log(add(1, "1"));
console.log(add(1, "0"));
