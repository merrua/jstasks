let person = {
  name: "Mary",
  surname: "Gilmartin",
  age: 43,
  address: "example",
  to_delete: "test",
};

person.favorite_color = "red";
person.address["address"] = "changed";

//console.log(person);
//console.log(person.fake); // gives undefined

// delete person.to_delete;
// console.log(person);

//console.log(Object.keys(person));

// Object.assign(target, source);
let person2 = { version: 2 };

Object.assign(person2, person);
//console.log(person2);

arr = ["tree", "wall", "grass", "flower", "bird"];
// console.log(arr.includes("tree"));
// console.log(arr.includes("river"));

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember("shopping");
remember("washing");
remember("wash the floor");

//console.log(todoList);
rememberUrgently("bill");
// console.log(todoList);

// console.log(getTask());
// console.log(todoList);

arr2 = arr.slice(); // copies whole array to new object
arr2.pop();
// arr2 is a new array not a reference
// console.log(arr2);
// console.log(arr);

// console.log("one two three".indexOf("ee"));
// console.log("  okay \n ".trim());
// console.log(String(6).padStart(3, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
// console.log(words);
// console.log(words.join(". "));
// console.log("LA".repeat(3));

m1 = [100, 99, 89, 79, 69, 55, 44, 33, 22, 10];

// rest parameter
// console.log(Math.max(...m1));

let words2 = ["never", "fully"];
// console.log(["will", ...words2, "understand"]);

// Math.sqrt
function calcHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
// console.log(calcHypotenuse(3, 4));

// trigonometry
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}
// console.log(randomPointOnCircle(2));

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10));

function city(object) {
  return object.address?.city;
}
console.log(city({ address: { city: "Toronto" } }));
// → Toronto
console.log(city({ name: "Vera" }));
// → undefined
