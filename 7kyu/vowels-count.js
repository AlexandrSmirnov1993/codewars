// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const vowels = "aeiou";
  let count = 0;
  let splitString = str.split("");
  for (let letter of splitString) {
    if (vowels.includes(letter)) count++;
  }
  return count;
}

console.log(getCount("The bird held a fish in its bill"));
