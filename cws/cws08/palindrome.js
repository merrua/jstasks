// Description:

// Write a function that checks if a given string (case insensitive)
//  is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of
//  symbols that reads the same backwards as forwards,
// such as madam or racecar.

function isPalindrome(x) {
  // your code here
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase()
    ? true
    : false;
}

// console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
