//Write a function which calculates the average of the numbers in a given array.
//Note: Empty arrays should return 0.

// var findAverage = (array) => {
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }

function findAverage(array) {
  // your code here
  if (array.length === 0) {
    return 0;
  }
  let avg = (array = array.reduce((a, b) => a + b) / array.length);
  return avg;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([]));
