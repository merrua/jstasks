// Sum object properties
// Write the code to sum all salaries
// and store in the variable sum
// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(obj) {
  if (Object.keys(obj).length === 0) {
    return 0;
  }
  let t = 0;
  for (let key in obj) {
    t += obj[key];
  }
  return t;
}

console.log(sumSalaries(salaries)); // expect 390
console.log(sumSalaries({})); //expect 0
