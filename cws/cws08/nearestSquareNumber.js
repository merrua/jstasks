// Description:

// Your task is to find the nearest square number
// of a positive integer n.
// In mathematics, a square number or perfect square
// is an integer that is the square of an integer;
// in other words, it is the product of some integer
// with itself.

// For example, if n = 111, then the nearest square number
//  equals 121, since 111 is closer to 121, the square of 11,
//  than 100, the square of 10.

// If n is already a perfect square (e.g. n = 144, n = 81, etc.),
// you need to just return n.

function nearestSq(n) {
  if (n === 1) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  let nearestSquare = 0;
  let difference = n - nearestSquare;
  let last = n - nearestSquare;
  for (let i = 2; i <= n + 10; i++) {
    nearestSquare = i * i;
    difference = Math.abs(n - nearestSquare);
    if (difference > last) {
      return (i - 1) * (i - 1);
    } else {
      last = difference;
    }
  }
  return nearestSquare;
}

console.log(nearestSq(111));
