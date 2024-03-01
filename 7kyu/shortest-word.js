// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  const words = s.split(" ");

  let shortestWord = Infinity;

  for (let word of words) {
    if (word.length < shortestWord) shortestWord = word.length;
  }
  return shortestWord;
}

console.log(findShort("The quick brown fox jumped over the lazy dog"));
