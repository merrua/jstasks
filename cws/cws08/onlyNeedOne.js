// You will be given an array a and a value x.
// All you need to do is check whether the provided
// array contains the value.
// a can contain numbers or strings. x can be either.
// Return true if the array contains the value, false if not.

// function check(a, x) {
//   // your code here
//   if (a.includes(x) || a.includes(parseInt(x)) || a.includes.toString(x)) {
//     return true;
//   } else {
//     return false;
//   }
// }

//const check = (a,x) => a.includes(x);

function check(a, x) {
  // your code here
  return a.includes(x);
}

let arr1 = ["a", "b"];
console.log(check(arr1, "a"));
let arr2 = [1, 2, 3];
console.log(check(arr2, 2));
let arr3 = ["1", 2, 3];
console.log(check(arr3, 1));

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(["t", "e", "s", "t"], "e"));
console.log(check(["what", "a", "great", "kata"], "kat"));
