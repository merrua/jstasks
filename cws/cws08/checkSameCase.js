// Description:

// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1

function sameCase(a, b) {
  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  } else if (isLowerCase(a) === isLowerCase(b)) {
    return 1;
  } else if (isUpperCase(a) === isUpperCase(b)) {
    return 1;
  } else {
    return 0;
  }
}

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

function isLowerCase(str1) {
  return str1 === str1.toLowerCase() ? true : false;
}

function isUpperCase(str1) {
  return str1 === str1.toUpperCase() ? true : false;
}

console.log(sameCase("a", "b"));
console.log(sameCase("A", "B"));
console.log(sameCase("a", "B"));
console.log(sameCase("A", "b"));
console.log(sameCase("a", "0"));
console.log(sameCase("&", "0"));
