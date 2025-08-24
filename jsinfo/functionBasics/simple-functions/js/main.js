//create a function that adds two numbers and alerts the sum

document.querySelector("#btn1").addEventListener("click", add);
document.querySelector("#btn2").addEventListener("click", multi);

function add() {
  let num1 = document.querySelector("#first").value;
  let num2 = document.querySelector("#firstb").value;
  let result = Number(num1) + Number(num2);
  alert(`${result}`);
  document.querySelector("#firstresult").innerText = result;
}
//add(2, 3); // is numbers

//create a function that multiplys three numbers and console logs the product
function multi() {
  let n1 = document.querySelector("#second").value;
  let n2 = document.querySelector("#secondb").value;
  let n3 = document.querySelector("#secondc").value;
  let res = Number(n1) * Number(n2) * Number(n3);
  console.log(`${res}`);
  document.querySelector("#secondresult").innerText = res;
}

//create a function that divides two numbers and returns the ???
function div(na1, na2) {
  let r = Number(na1) / Number(na2);
  return r;
}
