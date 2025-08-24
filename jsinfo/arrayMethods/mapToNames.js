// You have an array of user objects,
// each one has user.name.
//  Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

//let names0 = users.map((x, i, a) => console.log(x.name));
let names = users.map((x, i, a) => x.name);

//console.log(names);
alert(names); // John, Pete, Mary
