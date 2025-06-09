// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign
// indicating the operation to perform on these two numbers.
// You should return the result of applying the
//  given operation to these numbers.

function simpleCalculator(num1, num2, sign) {
  if (isNaN(num1) || isNaN(num2)) {
    return "unknown value";
  }
  if (sign === "+") {
    return num1 + num2;
  } else if (sign === "-") {
    return num1 - num2;
  } else if (sign === "*") {
    return num1 * num2;
  } else if (sign === "/") {
    return num1 / num2;
  } else {
    return "unknown value";
  }
}

console.log(simpleCalculator(1, 2, "+"));
console.log(simpleCalculator(3, 2, "-"));
console.log(simpleCalculator(2, 2, "*"));
console.log(simpleCalculator(6, 2, "/"));
console.log(simpleCalculator(1, 2, "&"));
console.log(simpleCalculator(1, "k", "*"));
