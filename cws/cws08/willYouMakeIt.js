//Description:
// You were camping with your friends far away from home,
// but when it's time to go back, you realize that your
// fuel is running out and the nearest pump is
// 50 miles away! You know that on average,
// your car runs on about 25 miles per gallon.
// There are 2 gallons left.

// Considering these factors,
// write a function that tells you if it is possible
// to get to the pump or not.
// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let result = mpg * fuelLeft >= distanceToPump ? true : false;
  return result;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
