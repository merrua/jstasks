const people = ["Sally", "Kyle", "John"];
// const sortedPeople = [...people].sort(); // old way

const sortedPeople = people.toSorted(); // new

console.log("Original", people);
console.log("Original", sortedPeople);
