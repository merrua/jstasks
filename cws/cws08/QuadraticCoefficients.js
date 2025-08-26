// Description:

// In this Kata you are expected to find
// the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby)
// containing coefficients of the equations in the order (a, b, c).
// a = 1.
// Remember, the roots can be written like (x-x1) * (x-x2) = 0
// Example

// quadratic(1,2) = (1, -3, 2)

// This means (x-1) * (x-2) = 0;
// when we do the multiplication this becomes x^2 - 3x + 2 = 0
// Example 2

// quadratic(0,1) = (1, -1, 0)

// This means (x-0) * (x-1) = 0;
//  when we do the multiplication this becomes x^2 - x + 0 = 0
// Notes

//     Inputs will be integers.
//     When x1 == x2, this means the root has the multiplicity of two

// quadratic equation
//var quadratic = (x1, x2) => [1, (x1 + x2)* -1, x1 * x2]

function quadratic(b, c) {
  let a = 1;
  let y1 = -(b + c);
  let y2 = b * c;
  return [a, y1, y2];
}
