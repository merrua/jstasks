function greet(name, owner) {
  // Add code here
  if (name.toUpperCase() === owner.toUpperCase()) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

console.log(greet("boss", "boss"));
console.log(greet("king", "king"));
