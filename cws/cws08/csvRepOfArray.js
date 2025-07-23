// Create a function that returns the CSV representation
// of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]]

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.
// More details here: https://en.wikipedia.org/wiki/Comma-separated_values
// Note: you shouldn't escape the \n, it should work as a new line.

// function toCsvText(array) {
//   let result = "";
//   array.forEach((element) => {
//     if (Array.isArray(element)) {
//       // if the element is an array
//       element.forEach((e, i, arr) => {
//         result += e;
//         if (i === arr.length - 1) {
//           result += "\n";
//         } else {
//           result += ",";
//         }
//       });
//     } else {
//       // if the element is not an array
//       result += element + ",";
//     }
//   });
//   return result.substring(0, result.length - 1);
// }

function toCsvText(array) {
  return array.join("\n");
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
