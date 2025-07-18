// Description:

// Your task is to sum the differences between
// consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty
// or the array has only one element the result should be 0

function sumOfDifferences(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  }
  let sum = 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

console.log(sumOfDifferences([1, 2, 3]));
console.log(sumOfDifferences([1, 2, 10]));
console.log(
  sumOfDifferences([3, 7, 19, 23, 17, 18, 0, 20, -16, 6, 24, 17, -4, -15, 3])
);
