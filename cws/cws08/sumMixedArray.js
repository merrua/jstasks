// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
  let result = x.reduce((acc, e) => acc + Number(e), 0);
  return result;
}

console.log(sumMix([9, 3, "7", "3"]));
