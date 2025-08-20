// Every budding hacker needs an alias!
// The Phantom Phreak, Acid Burn, Zero Cool and Crash Override
// are some notable examples from the film Hackers.

// Your task is to create a function that,
// given a proper first and last name, will return the correct alias.
// Notes:

//     Two objects that return a one word name in
//  response to the first letter of the first name
// and one for the first letter of the surname
// are already given. See the examples below for further details.

//     If the first character of either of the names
// given to the function is not a letter from A - Z,
// you should return "Your name must start with a letter from A - Z."

//     Sometimes people might forget to capitalize the
// first letter of their name so your function should
// accommodate for these grammatical errors.

var firstName = {
  A: "Alpha",
  B: "Beta",
  C: "Cache",
  D: "Data",
  E: "EXE",
  F: "Flame",
  G: "Glitch",
  H: "Hack",
  I: "Infinite",
  J: "Jiffy",
  K: "Kludge",
  L: "LOGICAL",
  M: "Malware",
};
var surname = {
  A: "Analogue",
  B: "Bomb",
  C: "Catalyst",
  D: "Daemon",
  E: "Epsilon",
  F: "Fried",
  G: "Gun",
  H: "Hook",
  I: "IRP",
  J: "JRST",
  K: "Kool",
  L: "Life",
  M: "Mode",
};

function aliasGen(first, last) {
  if (
    first[0].toLowerCase() != first[0].toUpperCase() &&
    last[0].toLowerCase() != last[0].toUpperCase()
  ) {
    return (
      firstName[first[0].toUpperCase()] + " " + surname[last[0].toUpperCase()]
    );
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}

console.log(aliasGen("Mike", "Millington"));
