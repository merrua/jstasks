// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  list1 = name.split(" ");
  return `${list1[0][0].toUpperCase()}.${list1[1][0].toUpperCase()}`;
}

console.log(abbrevName("Sam Harris"));
