// Write a function that removes the spaces from the string,
// then return the resultant string.

function noSpace(x) {
  return x.replace(/\s/g, "").trim();
}

console.log(noSpace("test it"));
