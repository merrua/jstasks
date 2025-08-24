// Write the function shuffle(array) that
// shuffles (randomly reorders) elements of the array.

// All element orders should have an equal probability.
// For instance, [1,2,3] can be reordered
// as [1,2,3] or [1,3,2] or [3,1,2] etc,
// with equal probability of each case.

// Multiple runs of shuffle may lead to different
// orders of elements. For instance:

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function shuffle(arr) {
  //  Fisher-Yates algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]
// ...
