// Description:

// Write a function that takes an array of numbers
// and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
// Assumptions

//     You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.

function sum1(numbers) {
  if (!numbers || numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum1([]));
console.log(sum1([1, 5.2, 4, 0, -1]));
