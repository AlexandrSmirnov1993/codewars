// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  // your code
  return s
    .split("")
    .reduce(
      (acc, value, index) =>
        acc + "-" + value.toUpperCase() + value.toLowerCase().repeat(index)
    );
}

console.log(accum("abcd"));
