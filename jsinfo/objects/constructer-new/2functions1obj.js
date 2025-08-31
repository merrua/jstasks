// Two functions – one object
// Is it possible to create functions A and B
// so that new A() == new B()?

let obj = { x: "test" };

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true
