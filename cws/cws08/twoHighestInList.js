// Description:

// In this kata, your job is to return
// the two distinct highest values in a list.
// If there're less than 2 unique values,
// return as many of them, as possible.

// The result should also be ordered from highest to lowest.
// Examples:
// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return arr;
  } else if (arr.length === 1) {
    return arr;
  }
  let arr2 = [...new Set(arr.sort((a, b) => b - a))].splice(0, 2);
  return arr2;
}

let x = [4, 10, 10, 9];
console.log(twoHighest(x));
