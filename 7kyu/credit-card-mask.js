// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }

  let result = "";
  for (let i = 0; i < cc.length - 4; i++) {
    result += "#";
  }

  result = result + cc.slice(-4);
  return result;
}

console.log(maskify("64607935616"));
