// function strCount(str, letter) {
//   let count = 0;
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === letter) {
//       count += 1;
//     }
//   }
//   return count;
// }

function strCount(str, letter) {
  return str.split("").filter((c) => c == letter).length;
}

console.log(strCount("Hello", "o"));
console.log(strCount("", "z"));
