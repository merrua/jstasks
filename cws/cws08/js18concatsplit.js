// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm:
// split the string into words by spaces,
// split each word into separate characters
// and join them back with the specified separator,
// join all the resulting "words" back into a sentence with spaces.

function splitAndMerge(str1, separator) {
  return str1
    .split(" ")
    .map((e) => (e = e.split("").join(separator)))
    .join(" ");
}

console.log(splitAndMerge("My name is John", " ")); //"M y n a m e i s J o h n"
