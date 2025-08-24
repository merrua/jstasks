// 1. Input validation

// Write a program that continues to ask the user for a number until
//  the entered number is less than or equal to 100.
// When you are done with the above, improve the program so that the
// terminating number is between 50 and 100.

document.querySelector("#btn1").addEventListener("click", inputValid1);

function inputValid1() {
  let r = document.querySelector("#num1").value;
  if (Number(r) > 50 && Number(r) < 100) {
    document.querySelector("p").innerText = "Done " + r;
  } else if (Number(r) <= 50) {
    document.querySelector("#num1").value = "";
    document.querySelector("#result1").innerText = "";
    document.querySelector("#result1").innerText = "Enter a larger number";
  } else {
    document.querySelector("#num1").value = "";
    document.querySelector("#result1").innerText = "";
    document.querySelector("#result1").innerText = "Enter a Smaller number";
  }
}

// 2. Multiplication table

// Write a program that asks the user for a number, then shows the
//  multiplication table for this number.
// When you are done, improve the program so
// it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

document.querySelector("#btn2").addEventListener("click", multi1);
document.querySelector("#result2").innerText = "";

function multi1() {
  document.querySelector("#result2").innerText = "";
  let n = document.querySelector("#num2").value;
  if (n > 2 && n < 9) {
    for (let i = 1; i <= 20; i++) {
      document.querySelector("#result2").innerText +=
        ` ${n} x ${i} =${n * i} ` + "\n";
    }
  } else {
    document.querySelector("#result2").innerText =
      "number should be between 2 and 9";
  }
}

// 3. Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// 4.  FizzBuzz

// Write a program that shows all numbers between 1 and 100 with the following exceptions:
//     It shows "Fizz" instead if the number is divisible by 3.
//     It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it
// so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
