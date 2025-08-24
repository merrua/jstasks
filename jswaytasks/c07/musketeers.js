// Musketeers
// Write a program that:

//     Creates an array named musketeers containing
// values "Athos", "Porthos" and "Aramis".
//     Shows each array element using a for loop.
//     Adds the "D'Artagnan" value to the array.
//     Shows each array element using the forEach() method.
//     Remove poor Aramis.
//     Shows each array element using a for-of loop.

console.log("for orginals : ");
let musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

console.log("for each with D'Artagnan : ");
musketeers.forEach((e) => console.log(e));

// Remove poor Aramis, remove one item at index 2
musketeers.splice(2, 1);

console.log("array without Aramis: ");
for (const m of musketeers) {
  console.log(m);
}
