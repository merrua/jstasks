// Create a function multiplyNumeric(obj)
// that multiplies all numeric property values
// of obj by 2

// Please note that multiplyNumeric does not need to
// return anything.
// It should modify the object in-place.

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj1) {
  if (Object.keys(obj1).length > 0) {
    for (let key in obj1) {
      if (typeof obj1[key] === "number") {
        obj1[key] = obj1[key] * 2;
      }
    }
  }
}

multiplyNumeric(menu);
console.table(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };
