// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example:
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  const lowerCaseStr = str.toLowerCase();
  const compareStr = [];

  for (let i = 0; i < lowerCaseStr.length; i++) {
    const letter = lowerCaseStr[i];

    if (compareStr.includes(letter)) return false;
    else compareStr.push(letter);
  }
  return true;
}

console.log(isIsogram("moose"));
