// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Array contains only digits 1-8 that represents material 1-8.
// All inputs are valid.
// Array contains at least 1 digit.
// Each digit appears at most once.

//  isValid = a => !(a.includes(1) && a.includes(2)) &&
//                 !(a.includes(3) && a.includes(4)) &&
//                 a.includes(5) === a.includes(6) &&
//                 (a.includes(7) || a.includes(8));

function isValid(formula) {
  let result = false;
  // material7 or  material8 must be selected(at least one, or both)
  if (formula.includes(7) || formula.includes(8)) {
    result = true;
  }
  // material1 and material2 cannot be selected at the same time
  if (formula.includes(1) && formula.includes(2)) {
    return false;
  }
  // material3 and material4 cannot be selected at the same time
  if (formula.includes(3) && formula.includes(4)) {
    return false;
  }
  // material5 and material6 must be selected at the same time
  if (formula.includes(5) != formula.includes(6)) {
    return false;
  }
  // material7 or  material8 must be selected(at least one, or both)
  if (!formula.includes(7) && !formula.includes(8)) {
    return false;
  }
  return result;
}

console.log(isValid([1, 3, 7]));
console.log(isValid([5, 6, 7, 8]));
console.log(isValid([5, 6]));
