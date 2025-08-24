// Translate border-left-width to borderLeftWidth
// importance: 5

// Write the function camelize(str) that changes
//  dash-separated words like “my-short-string”
// into camel-cased “myShortString”.

// That is: removes all dashes, each word
// after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string
// into an array, transform it and join back.

function camelize(str1) {
  const wrds = str1.split("-");
  let r;

  for (let i = 0; i < wrds.length; i++) {
    let str = wrds[i];
    if (i !== 0) {
      r += replaceWithUppercase(str, 0);
    } else if (i === 0) {
      r = str;
    } else {
    }
  }

  return r;
}

function replaceWithUppercase(str, index) {
  let c = str.split("");
  c[index] = c[index].toUpperCase();
  return c.join("");
}

console.log(replaceWithUppercase("test", 0));
console.log(camelize("my-short-string"));
