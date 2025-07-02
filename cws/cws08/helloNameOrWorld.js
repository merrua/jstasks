// Description:
// Define a method hello that returns "Hello, Name!"
// to a given name, or says Hello, World!
// if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos
// to return a name with a first capital letter (Xxxx).

function hello(name) {
  if (!name || name.length === 0) {
    return "Hello, World!";
  } else {
    let c = name.toLowerCase().split("");
    c[0] = c[0].toUpperCase();
    return `Hello, ${c.join("")}!`;
  }
}

console.log(hello("alice"));
