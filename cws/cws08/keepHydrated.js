// 0.5 litres of water per hour of cycling.
// You get given the time in hours
// and you need to return the number of litres
// the person will drink, rounded down.

function litres(time) {
  return Math.round(0.5 * time);
}

console.log(litres(1));
