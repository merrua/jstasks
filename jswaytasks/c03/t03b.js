//Write a program that accepts two numbers,
//  then compares their values and displays
// an appropriate message in all cases.

document.querySelector("#btn1").addEventListener("click", numcom);
document.querySelector("#result1").innerText = "";

function numcom() {
  document.querySelector("#result1").innerText = "";
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;

  let result;

  if (num1 === "" || num1 === undefined) {
    result = `invalid value num1 can't be undefined or empty`;
  } else if (num2 === "" || num2 === undefined) {
    result = `invalid value num2 can't be undefined or empty`;
  } else if (isNumeric(num1) && isNumeric(num2)) {
    if (num1 > num2) {
      result = `${num1} is greater than ${num2}`;
    } else if (num1 === num2) {
      result = `${num1} is equal to ${num2}`;
    } else if (num1 < num2) {
      result = `${num1} is less than ${num2}`;
    } else {
      result = `invalid value`;
    }
  } else {
    result = `invalid value both values must be numbers`;
  }
  document.querySelector("#result1").innerText = result;
}

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}
