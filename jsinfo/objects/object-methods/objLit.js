// Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?

console.log("test");

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // user.ref.name = ""
//user = Object { name: "John", ref: Window }
