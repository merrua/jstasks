// Given three integers a, b, and c,
// return the largest number obtained
// after inserting the operators +, *,
// and parentheses ().
// In other words,
// try every combination of a, b, and c
// with the operators, without reordering the operands,
// and return the maximum value.
// Example
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

// function expressionMatter(a, b, c) {
//   let arr = [];
//   arr.push(a + b + c);
//   arr.push(a * b * c);
//   arr.push(a + b * c);
//   arr.push(a * b + c);
//   arr.push((a + b) * c);
//   arr.push(a * (b + c));
//   return arr.reduce((a,b) => Math.max(a, b));
// }

function expressionMatter(a, b, c) {
  let test1 = a * b * c;
  let test2 = (a + b) * c;
  let test3 = a + b * c;
  let test4 = a * (b + c);
  let test5 = a * b + c;
  let test6 = a + b + c;
  let result = Math.max(test1, test2, test3, test4, test5, test6);
  return result;
}

console.log(expressionMatter(1, 2, 3));
