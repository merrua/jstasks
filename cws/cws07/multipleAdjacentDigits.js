// Multiply the adjacent digits which are not separated
//  by a '-' or a '+' in a string, then do the sum.

// For example:
// "53+5"    ->   20, which is 5 * 3 + 5
// "266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
// "555"     ->  125, which is 5 * 5 * 5

// current digit is multiplied by the next digit
// unless its a - or +
// when its a - next
//
// stop at length - 1

function digitMultiplication(expr) {
  let expression = "";
  for (let i = 0; i < expr.length; i++) {
    if (i === expr.length - 1) {
      expression += expr[i];
    } else {
      if (expr[i + 1] === "+") {
        expression += expr[i] + " + ";
        i++;
      } else if (expr[i + 1] === "-") {
        expression += expr[i] + " - ";
        i++;
      } else {
        expression += expr[i] + " * ";
      }
    }
  }
  //console.log(expression);
  return eval(expression);
}

console.log("53+5: " + digitMultiplication("53+5")); //20
console.log("266-66: " + digitMultiplication("266-66")); // 36
console.log("555: " + digitMultiplication("555")); // 125
console.log("55+5: " + digitMultiplication("55+5")); // 30
console.log("55+5: " + digitMultiplication("55-5")); //20
console.log(digitMultiplication("12345-11989+1231111"));
