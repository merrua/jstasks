// Is there a vowel in there?
// Description:

// Given an array of numbers, check if any of the numbers
// are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121]
// output Return the resulting array.

let a = [97, 101, 105, 111, 117];
// a = 97, e = 101, i = 105, o = 111, u = 117

function isVow(a) {
  let newArr = a.map(function (n) {
    if (n === 97 || n === 101 || n === 105 || n === 111 || n === 117) {
      return String.fromCharCode(n);
    }
    return n;
  });

  return newArr;
}

console.log(isVow(a));
