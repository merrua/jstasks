//Neither may use the standard reverse method.
// reverseArray, takes an array as argument
// and produces a new array that has the same
// elements in the inverse order.

//reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument by reversing its elements.

function reverseArray(arr) {
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    r.unshift(arr[i]);
  }
  return r;
}

function reverseArrayInPlace(arr) {
  let j = arr.length - 1;
  let end = Math.floor(arr.length / 2);
  for (let i = 0; i < end; i++) {
    j = arr.length - 1 - i;
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace(["A", "B", "C"]));
console.log(reverseArrayInPlace(["A", "B", "C", "D", "E"]));
