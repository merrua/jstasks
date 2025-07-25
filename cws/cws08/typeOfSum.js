// Return the type of the sum of the two arguments

function typeOfA(a) {
  if (typeof a === null) {
    return "object";
  } else if (typeof a === "undefined") {
    return "undefined";
  } else if (typeof a === "object") {
    return "object";
  } else if (typeof a === "function") {
    return "function";
  } else if (typeof a === "bigint") {
    return "bigint";
  } else if (typeof a === "boolean") {
    return "boolean";
  } else if (typeof a === "string") {
    return "string";
  } else if (typeof a === "symbol") {
    return "string";
  } else if (typeof a === "number") {
    return "number";
  }
}

function typeOfSum2(a, b) {
  return typeof (a + b);
}

console.log(typeOfSum(12, 1));
console.log(typeOfSum("d", 1));
