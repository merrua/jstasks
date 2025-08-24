// Following day
// Write a program that accepts a day name from the user,
// then shows the name of the following day.
// Incorrect inputs must be taken into account.

// let day = prompt("enter a day");
// console.log(day);

document.querySelector("#btn1").addEventListener("click", fday);
document.querySelector("#result1").innerText = "";

function fday() {
  document.querySelector("#result1").innerText = "";
  let result;
  let day = document.querySelector("#day1").value.toLowerCase();
  switch (day) {
    case "monday":
      result = "tuesday";
      break;
    case "tuesday":
      result = "wedensday";
      break;
    case "wedensday":
      result = "thursday";
      break;
    case "thursday":
      result = "friday";
      break;
    case "friday":
      result = "saturday";
      break;
    case "saturday":
      result = "sunday";
      break;
    case "sunday":
      result = "monday";
      break;
    default:
      result = "not a day";
  }
  document.querySelector("#result1").innerText = result;
}
