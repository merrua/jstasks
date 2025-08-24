// 1. Input validation

// Write a program that continues to ask the user for a number until
//  the entered number is less than or equal to 100.

document.querySelector("#btn1").addEventListener("click", inputValid1);

function inputValid1() {
  let r = document.querySelector("#num1").value;
  if (Number(r) <= 100) {
    document.querySelector("#num1").value = "";
    document.querySelector("#result1").innerText = "";
    document.querySelector("#result1").innerText = "Enter a larger number";
  } else {
    document.querySelector("#result1").innerText = r;
  }
}

// When you are done with the above, improve the program so that the
// terminating number is between 50 and 100. (t04b.js)

// 2. Multiplication table

// Write a program that asks the user for a number, then shows the
//  multiplication table for this number.
document.querySelector("#btn2").addEventListener("click", multi1);
document.querySelector("#result2").innerText = "";

function multi1() {
  document.querySelector("#result2").innerText = "";
  let n = document.querySelector("#num2").value;
  for (let i = 1; i <= 20; i++) {
    document.querySelector("#result2").innerText +=
      ` ${n} x ${i} =${n * i} ` + "\n";
  }
}
