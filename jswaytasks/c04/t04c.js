// 3. Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user.
// Specifically, the program asks the user to enter text
//  until either "yes" or "no" is typed, which ends the game.

document.querySelector("#btn1").addEventListener("click", neitherYesNo1);
document.querySelector("#result1").innerText = "";

function neitherYesNo1() {
  document.querySelector("#result1").innerText = "";
  let r = document.querySelector("#txt1").value;
  if (r.toLowerCase() === "yes" || r.toLowerCase() === "no") {
    document.querySelector("#result1").innerText = "ended";
  } else if (
    r.toLowerCase().includes("yes") ||
    r.toLowerCase().includes("no")
  ) {
    document.querySelector("#result1").innerText = "ended";
  } else {
  }
}

// 4.  FizzBuzz

// Write a program that shows all numbers between 1 and 100 with the following exceptions:
//     It shows "Fizz" instead if the number is divisible by 3.
//     It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it
// so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
document.querySelector("#btn2").addEventListener("click", FizzBuzz);

function FizzBuzz() {
  let r = document.querySelector("#txt2").value;
  for (let i = 1; i <= r; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      document.querySelector("#result2").innerText += " FizzBuzz " + "\n";
    } else if (i % 5 === 0) {
      document.querySelector("#result2").innerText += " Buzz " + "\n";
    } else if (i % 3 === 0) {
      document.querySelector("#result2").innerText += " Fizz " + "\n";
    } else {
      document.querySelector("#result2").innerText += ` ${i} ` + "\n";
    }
  }
}
