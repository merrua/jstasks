// Your task is to create a function with inputs colours and pairs
// that returns the minimum number of socks
// that I would have to take from my drawer
// to guarantee pairs number of matching pairs.
// Note: colours and pairs are both positive integers.

function socks(colours, pairs) {
  return colours - 1 + 2 * pairs;
}

// function socks(colours, pairs) {
//   if(colours === 1) {
//     return pairs * 2;
//   }
//   return pairs * 2 + colours - 1;
// }

console.log(socks(2, 1)); // 3
console.log(socks(1, 2)); // 4
