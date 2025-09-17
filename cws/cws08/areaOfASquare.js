// Complete the function that calculates the area of the red square,
//  when the length of the circular arc A is given as the input.
//  Return the result rounded to two decimals.

function squareArea(A) {
  let r = (2 * A) / Math.PI;
  let sqr = r ** 2;
  return +sqr.toFixed(2);
}

console.log(squareArea(2));
