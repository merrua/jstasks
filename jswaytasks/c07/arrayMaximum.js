// Array maximum

// Write a program that creates the following array,
//  then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];

let result = 0;
values.forEach((x) => {
  if (x > result) {
    result = x;
  }
});
console.log(`${result}`);
