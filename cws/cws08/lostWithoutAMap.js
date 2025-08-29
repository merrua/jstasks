// Description:
// Given an array of integers,
// return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

let t1 = [1, 2, 3];
let t2 = [2, 4, 8, 16, 32];

// not mutate
function maps(x) {
  return x.map((e, i, arr) => (e = e + e));
}

console.log(maps(t1));
console.log(t1);
