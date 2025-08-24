// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result
console.log(sayHello("mary", "gilmartin"));

// Number squaring
// Square the given number x
function square1(x) {
  return x * x;
}
console.log(square1(2));

// Square the given number x
const square2 = (x) => {
  x * x;
};

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// Minimum of two numbers
// TODO: write the min() function
function min(x, y) {
  if (x < y) {
    return x;
  } else if (y < x) {
    return y;
  } else {
    return x;
  }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1

// Calculator
// TODO: complete program
function calculate(x, operator, y) {
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    if (y === 0) {
      return Infinity;
    }
    return x / y;
  } else {
    console.log("operator is not known.");
  }
}

console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// Circumference and area of a circle
// Write a program containing two functions to calculate
// the circumference and area of a circle defined by its radius.
// Test it using user input.

console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3

function circumference(radius) {
  return 2 * 3.14 * radius;
}
function areaOfCircle(radius) {
  return 3.14 * radius ** 2;
}

function getCircumference() {
  let radius = document.querySelector("#radius").value;
  document.getElementById("circumference").innerText = circumference(radius);
}

function getAreaOfCircle() {
  let radius = document.querySelector("#radius").value;
  document.getElementById("area").innerText = areaOfCircle(radius);
}

document.querySelector("#btn1").addEventListener("click", getCircumference);
document.querySelector("#btn2").addEventListener("click", getAreaOfCircle);
