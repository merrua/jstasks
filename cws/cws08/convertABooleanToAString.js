// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

function booleanToString(b) {
  return b ? "true" : "false";
}

function booleanToString2(b) {
  return b.toString();
}

console.log(booleanToString(true));
console.log(booleanToString(false));
