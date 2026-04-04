// Coding in function fiveLine, function accept 1 parameter:s.
// s is a string.
// Please return a string of 5 lines(newline symbol is \n).
// The first line has one s; Second line have two s; and so on.
// Fifth line have five s;
// Note1: The two sides of the parameter s may contain some whitespace,
//  please clear them before using s.
// Note2: Using a string template can make your job easier.

function plus(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

function repeatIt(s) {
  console.log(`${s} ${s} ${s}`);
}

// dumb but passes
// function fiveLines(s) {
//   let n = s.trim();
//   return `${n}\n${n}${n}\n${n}${n}${n}\n${n}${n}${n}${n}\n${n}${n}${n}${n}${n}`;
// }

function fiveLines(s) {
  return [1, 2, 3, 4, 5].map((n) => s.trim().repeat(n)).join("\n");
}

// plus(1, 2);
// plus(3, 4);
// repeatIt`a`;
// repeatIt`ab`;

//console.log(" a".trim());

console.log(fiveLines("a"));
