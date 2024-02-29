//Write a function to split a string and convert it into an array of words.

//Examples
// - "Robin Singh" ==> ["Robin", "Singh"]
// - "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(str) {
  return str.split(" ");
}

console.log(stringToArray("I love arrays they are my favorite"));
