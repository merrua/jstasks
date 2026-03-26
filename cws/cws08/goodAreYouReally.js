// You receive an array with your peers' test scores.
// Now calculate the average and compare your score!
// Return true if you're better, else false!
// Note:
// Your points are not included in the array of your class's points.
// Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  const avgClass = (array =
    classPoints.reduce((x, y) => x + y) / classPoints.length);
  return yourPoints > avgClass ? true : false;
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([50, 50, 50], 50));
