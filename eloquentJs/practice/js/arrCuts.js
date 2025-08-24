const people = ["Sally", "Kyle", "John"];
//people.splice(0, 2, "New");
const copy = people.toSpliced(0, 2, "New");

console.log("Original", people);
console.log("Copy", copy);
