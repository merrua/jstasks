// Introduction

// The first century spans from the year 1 up to
// and including the year 100,
// the second century - from the year 101 up to
// and including the year 200, etc.

// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

console.log(century(1700)); // 17
console.log(century(1701)); // 18
console.log(century(1705)); // 18
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(2000));
// console.log(century(2742));

function century(year) {
  return Math.ceil(year / 100);
}
