// Description:

// Create a function that
// takes 2 integers in form of a string as an input,
// and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// Notes:

//     If either input is an empty string, consider it as zero.
//     Inputs and the expected output will never
// exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a, b) {
  if (a === "" && b === "") {
    return "0";
  } else if (a === "0" && b === "0") {
    return "0";
  } else if (a === "" && b !== "") {
    // then a is 0
    let b1 = parseInt(b);
    return b1.toString();
  } else if (b === "" && a !== "") {
    // then b is 0
    let a1 = parseInt(a);
    return a1.toString();
  } else {
    let a1 = parseInt(a);
    let b1 = parseInt(b);
    let c = a1 + b1;
    return c.toString();
  }
}

// function sumStr(a, b) {
//   return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
// }

console.log(sumStr("", 1));
console.log(sumStr(1, 1));
