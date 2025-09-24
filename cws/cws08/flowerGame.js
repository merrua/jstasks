// take a flower and tear its petals,
// saying each of the following phrases each time a petal was torn:
//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"
// If there are more than 6 petals,
// you start

// Your goal in this kata is to determine which
//  phrase the girls would say at the last petal for a flower
// of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
  let sayings = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  let x = (nbPetals - 1) % 6;
  return sayings[x];
}

console.log(howMuchILoveYou(7));
