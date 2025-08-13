// You are given two sorted arrays that contain only integers.
// These arrays may be sorted in either ascending or descending order.
// Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.
// Any duplicate values are removed, so each integer appears only once.
// If both input arrays are empty, return an empty array.
// No input validation is needed, as both arrays
//  are guaranteed to contain zero or more integers.

function mergeArrays(arr1, arr2) {
  if (arr1 == [] && arr2 == []) {
    return [];
  }
  if (arr1 == []) {
    return arr2;
  }
  if (arr2 == []) {
    return arr1;
  }
  let r = [];
  // sort
  r = arr1.concat(arr2).sort((a, b) => a - b);
  // deduplicate
  d = r.filter((el, i, arr) => arr.indexOf(el) === i);
  return d;
}

// function mergeArrays(arr1, arr2) {
//   return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
// }

// function mergeArrays(arr1, arr2) {
//   return arr1
//     .filter((item) => !arr2.includes(item))
//     .concat(arr2)
//     .sort((a, b) => a - b)
// }

// console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
// console.log(mergeArrays([5, 6, 7, 8], [1, 2, 3, 4]));
console.log(mergeArrays([5, 5, 6, 7, 8], [1, 1, 2, 3, 4]));
// console.log(mergeArrays([], []));
