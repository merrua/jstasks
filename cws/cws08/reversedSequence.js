// Description:

// Build a function that returns
// an array of integers
// from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// function reverseSeq(n) {
//   let r = [];
//   for (let i = n; i > 0; i--) {
//     r.push(i);
//   }
//   return r;
// }

const reverseSeq1 = (n) => {
  let r = [];
  for (let i = n; i > 0; i--) {
    r.push(i);
  }
  return r;
};

// console.log(reverseSeq(5));
console.log(reverseSeq1(5));
