function unique2(arr) {
  /* your code */
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.includes(arr[i])) {
    } else {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// console.log(unique2(strings));
console.log(unique(strings)); // Hare, Krishna, :-O
