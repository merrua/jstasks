// We’ve seen that we can use % (the remainder operator) to
//  test whether a number is even or odd by
// using % 2 to see whether it’s divisible by two.
// Here’s another way to define whether a positive whole number
//  is even or odd:

//     Zero is even.
//     One is odd.
//     For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description.
// The function should accept a single parameter
// (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why?
// Can you think of a way to fix this?

// function isEven1(num1) {
//   if (num1 < 0) {
//     return "error";
//   }
//   if (num1 === 0) {
//     return true;
//   }
//   if (num1 % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// recursion means no modulus operator

function isEven(num1) {
  if (num1 === undefined || num1 === "") {
    return "error num1 is undefined or empty";
  }
  if (num1 < 0) {
    return "error num1 is less than 0";
  } else if (num1 === 0) {
    //console.log("num1 is 0");
    return true;
  } else if (num1 === 1) {
    return false;
  } else if (num1 === 2) {
    return true;
  } else {
    return isEven(num1 - 2);
  }
}

console.log("result for 5 " + isEven(5));
console.log("result for 50 " + isEven(50));
// → true
console.log("result for 75 " + isEven(75));
// → false
console.log("result for 1 " + isEven(-1));
// → ??

/// made a mistake when I was not returning the
// recursison call

function isEven3(num1) {
  num1 = Math.abs(num1); // turn minus numbers into positive

  if (num1 === undefined || num1 === "") {
    return "error num1 is undefined or empty";
  } else if (num1 === 0) {
    //console.log("num1 is 0");
    return true;
  } else if (num1 === 1) {
    return false;
  } else if (num1 === 2) {
    return true;
  } else {
    return isEven(num1 - 2);
  }
}
