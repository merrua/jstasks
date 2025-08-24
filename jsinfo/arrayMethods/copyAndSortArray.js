// Copy and sort array
// importance: 5

// We have an array of strings arr.
// We’d like to have a sorted copy of it,
// but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  return arr.sort();
}

let sorted = copySorted(arr);

alert("sorted " + sorted); // CSS, HTML, JavaScript
alert("arr " + arr); // HTML, JavaScript, CSS (no changes)
