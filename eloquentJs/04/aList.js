// Write a function arrayToList that builds up a list structure
// like the one shown when given [1, 2, 3] as argument.

// Also write a listToArray function that produces an array from a list.

// Add the helper functions prepend,
// which takes an element and a list
// and creates a new list that adds the element to
// the front of the input list,

// and nth,
// which takes a list and a number and returns the element
// at the given position in the list
// (with zero referring to the first element)
// or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

function nth(list1, num1) {
  if (!list1) return undefined;
  else if (num1 == 0) return list1.value;
  else return nth(list1.rest, num1 - 1);
}

function prepend(val, list1) {
  return { val, rest: list1 };
}

let ex1 = prepend(1, {});
let ex2 = prepend(2, ex1);

//console.log(ex1);
// console.log(ex2);
//console.log(prepend(2, ex1));
// { val: 2, rest:  { val: 1, rest: {} } }

// produces an array from a list.
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
//console.log(listToArray(prepend(2, ex1)));

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

//let temp = arrayToList([10, 20, 30]);
// let temp2 = { value: 30, rest: null };
// console.log(temp2);
// console.log(listToArray(temp2)); // [ 30 ]

// console.log(arrayToList([10, 20]));
// console.log(arrayToList([1, 2, 3]));
