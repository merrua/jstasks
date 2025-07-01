// Description:

// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago
// the father was twice as old as his son
// (or in how many years he will be twice as old).
// The answer is always greater or equal to 0,
// no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  if (sonYearsOld === 0) {
    return dadYearsOld;
  } else if (sonYearsOld * 2 > dadYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
  } else if (sonYearsOld * 2 === dadYearsOld) {
    return 0;
  } else if (sonYearsOld * 2 < dadYearsOld) {
    return Math.abs(sonYearsOld * 2 - dadYearsOld);
  }
}

console.log(twiceAsOld(36, 7)); // 22
console.log(twiceAsOld(30, 15)); // 0
console.log(twiceAsOld(42, 21)); // 0
console.log(twiceAsOld(22, 1)); // 20
console.log(twiceAsOld(29, 0)); // 29
