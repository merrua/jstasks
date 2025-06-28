// Write function RemoveExclamationMarks which removes
//  all exclamation marks from a given string.

function removeExclamationMarks(s) {
  if (!s.includes("!")) {
    return s;
  }
  return s.replace(/!/g, "");
}

console.log(removeExclamationMarks("Hello World!!"));
