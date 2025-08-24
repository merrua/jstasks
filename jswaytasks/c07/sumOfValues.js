// Write a program that creates the following array,
// then calculates
// and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

for (let i = 0; i < values.length; i++) {
  sum += Number(values[i]);
}

console.log(`result is ${sum}`);
