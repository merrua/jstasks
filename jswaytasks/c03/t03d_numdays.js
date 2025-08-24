document.querySelector("#btn1").addEventListener("click", daysOfTheMonth);
document.querySelector("#result1").innerText = "";

function daysOfTheMonth() {
  document.querySelector("#result1").innerText = "";

  let num1 = Number(document.querySelector("#num1").value);

  let result;
  switch (num1) {
    case 1:
      result = 31;
      break;
    case 2:
      result = 28;
      break;
    case 3:
      result = 31;
      break;
    case 4:
      result = 30;
      break;
    case 5:
      result = 31;
      break;
    case 6:
      result = 30;
      break;
    case 7:
      result = 31;
      break;
    case 8:
      result = 31;
      break;
    case 9:
      result = 30;
      break;
    case 10:
      result = 31;
      break;
    case 11:
      result = 30;
      break;
    case 12:
      result = 31;
      break;
    default:
      result = "Error";
  }
  document.querySelector("#result1").innerText = result;
}
