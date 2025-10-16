// Task

// Given an integer (1 <= n <= 100)
// representing a person's age,
// return their minimum and maximum age range.
// This equation doesn't work when the age <= 14,
// so if the age <= 14, use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age

// You should floor all your answers so that
// an integer is given instead of a float
// (which doesn't represent age).
// Return your answer in the form "[min]-[max]"
// Examples:

// age = 27   =>   "20-40"
// age = 5    =>   "4-5"
// age = 17   =>   "15-20"

function datingRange(age) {
  let min = 0;
  let max = 0;
  if (age <= 14) {
    min = Math.floor(age - (0.1 * age)); // prettier-ignore
    max = Math.floor(age + (0.1 * age)); // prettier-ignore
    return `${min}-${max}`;
  } else {
    min = Math.floor((age / 2) + 7); // prettier-ignore
    max = Math.floor(2*(age - 7)); // prettier-ignore
    return `${min}-${max}`;
  }
}

console.log(datingRange(14));
console.log(datingRange(17));
console.log(datingRange(40));
