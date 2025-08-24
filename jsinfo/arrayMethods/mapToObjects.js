// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it,
// of objects with id and fullName,
// where fullName is generated from name and surname.
// For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

// not done

function makeUser(fullname, id) {
  let a = { fullName: fullname, id: id };
  return a;
}

// let usersMapped1 = users.map(
//   (x, i, a) => (x.fullName = `${x.name} ${x.surname}`)
// );
// console.log(usersMapped1);

let usersMapped2 = users.map((x, i, a) =>
  makeUser(`${x.name} ${x.surname}`, i)
);

//console.log(usersMapped2);

let usersMapped = users.map((x, i, a) => {
  return { fullName: `${x.name} ${x.surname}`, id: i + 1 };
});
console.log(usersMapped);

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith

// So, actually you need to map one array of objects to another.
//  Try using => here. There’s a small catch.
