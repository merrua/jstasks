//  get the sum of two arrays...
// Actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  const init = 0;
  let sum = arr1.reduce((acc, e) => acc + e, init);
  let sum2 = arr2.reduce((acc, e) => acc + e, init);
  return sum + sum2;
}

// chain it
// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

// new array with spread (memory?)
// function arrayPlusArray(arr1, arr2) {
//   let arr = [...arr1, ...arr2];
//   return arr.reduce((acc, e) => acc + e);
// }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); //-2
