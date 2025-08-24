// Check for emptiness
// Write the function isEmpty(obj) which
// returns true if the object has no properties,
// false otherwise.

function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return false;
  }
  return true;
}

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false
