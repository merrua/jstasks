// Define the function min that takes two arguments
// and returns their minimum.

document.querySelector("#btn1").addEventListener("click", getMin);
document.querySelector("#num1").value = "";
document.querySelector("#num2").value = "";

function min(num1, num2) {
  return Math.min(num1, num2);
}

function getMin() {
  document.querySelector("#result1").innerText = "";

  let n1 = document.querySelector("#num1").value;
  let n2 = document.querySelector("#num2").value;
  let r = min(n1, n2);
  document.querySelector("#result1").innerText = r;
}

// console.log(min(0, 10));
// console.log(min(0, -10));
// console.log(min(5, 10));
