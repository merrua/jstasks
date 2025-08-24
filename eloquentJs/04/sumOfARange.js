// Write a range function that takes two arguments,
//  start and end,
// and returns an array containing all the numbers
// from start up to and including end.
// Next, write a sum function that takes an array of
// numbers and returns the sum of these numbers.
// Run the example program and see whether
// it does indeed return 55.

function range1(a, b) {
  let r = [];
  for (let i = a; i <= b; i++) {
    r.push(i);
  }
  return sum(r);
}

function sum(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}

console.log(range1(1, 10));
