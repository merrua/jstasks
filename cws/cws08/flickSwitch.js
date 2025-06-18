// Create a function that always returns True/true for every item
// in a given list.
// However, if an element is the word 'flick',
// switch to always returning the opposite boolean value.
// Examples

// ['beep', 'flick', 'code', 'boop'] ➞ [True, False, False, False]
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// Notes
//     "flick" will always be given in lowercase.
//     A list may contain multiple flicks.
//     Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr) {
  let default1 = true;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      if (default1 === true) {
        default1 = false;
      } else {
        default1 = true;
      }
      arr2[i] = default1;
    } else if (arr[i] !== "flick") {
      arr2[i] = default1;
    }
  }
  return arr2;
}

let arr1 = ["beep", "flick", "code", "boop"];
console.log(flickSwitch(arr1));

let arr2 = ["flick", "chocolate", "adventure", "sunshine"];
console.log(flickSwitch(arr2));

let arr3 = ["bicycle", "jarmony", "flick", "sheep", "flick"];
console.log(flickSwitch(arr3));
