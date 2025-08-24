// variables tasks

// task 1
// Declare two variables: admin and name.
let admin;
let name;

// Assign the value "John" to name.
name = "John";
admin = name;

console.log(`${admin}`);

// task 2
let ourPlanet = "Earth";
let currentVistorName = "Alice";

// task 3
const BIRTHDAY = "16.05.1982";
const age = someCode(BIRTHDAY);

// function-basic tasks
// task 1, Is "else" required?

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did your parents allow you to do this?");
  }
}
checkAge(16);
checkAge(19);

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did your parents allow you to do this?");
}
checkAge(18);

// answer = no difference

// task 2, Rewrite the function using '?' or '||'

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

checkAge(18);
checkAge(19);

function checkAge2(age) {
  return age > 18 || confirm("Did parents allow you?");
}

checkAge2(18);
checkAge2(19);

// task 3 Function min(a, b)
// returns the least of two numbers a and b.
function min(a, b) {
  return a > b ? a : b;
}

// task 4 Function pow(x,n)
// Write a function pow(x,n) that returns x in power n.
// Create a web-page that prompts for x and n,
// and then shows the result of pow(x,n).
function pow(x, n) {
  let result = 0;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
alert(pow(8, 4));
