// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

function getChar(c) {
  return String.fromCharCode(c);
}

console.log(getChar(65));
console.log(getChar(97));
console.log(getChar(48));
console.log(getChar(33));
