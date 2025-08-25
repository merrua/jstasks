// Remove 1 exclamation mark from the end of a string.
// For a beginner kata,
// you can assume that the input data is always a string,
// no need to verify it.

// const remove = s => s.replace(/!$/, '');

function remove(str1) {
  if (str1[str1.length - 1] === "!") {
    return str1.substring(0, str1.length - 1);
  }
  return str1;
}

console.log(remove("Hi!"));
