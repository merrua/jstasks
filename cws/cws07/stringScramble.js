"use strict";

// Notes
//     The string and the array will be of equal length.
//     The string will contain valid characters
// (A-Z, a-z, or 0-9);
//     the array will contain valid indices.

function scramble(str, arr) {
  let result = [];
  arr.map((el, i) => {
    result[el] = str[i];
  });
  return result.join().replaceAll(",", "");
}

let str1 = "abcd";
let arr1 = [0, 3, 1, 2];
console.log(scramble(str1, arr1)); //"acdb"
