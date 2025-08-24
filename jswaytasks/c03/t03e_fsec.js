// Following second
// Write a program that asks for a time
// under the form of three information (hours, minutes, seconds).
// The program calculates and shows the time one second after.
//  Incorrect inputs must be taken into account.
// This is not as simple as it seems...
// Look at the following results to see for yourself:

//     14h17m59s should give 14h18m0s
//     6h59m59s should give 7h0m0s
//     23h59m59s should give 0h0m0s (midnight)

document.querySelector("#btn1").addEventListener("click", fSeconds);

function fSeconds() {
  let hours = Number(document.querySelector("#hours").value);
  let mins = Number(document.querySelector("#mins").value);
  let secs = Number(document.querySelector("#sec1").value);

  // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
  //  Date.prototype.toTimeString()
  let test = new Date(2025, 6, 7, hours, mins, secs + 1);

  // test Mon Jul 07 2025 12:00:00 GMT+0100 (Irish Standard Time)
  // console.log("test " + test);
  //  test2 Mon Jul 07 2025
  //console.log("test2 " + test.toDateString());
  document.querySelector("#result1").innerText = test.toTimeString();
}
