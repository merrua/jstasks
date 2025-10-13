// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// angles add to 180

function otherAngle(a, b) {
  return 180 - (a + b);
}

console.log(otherAngle(30, 60));
