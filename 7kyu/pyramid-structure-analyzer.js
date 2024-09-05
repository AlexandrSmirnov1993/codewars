// In this kata, you are given the sum of the number of vertices, edges, and faces of an

// N-sided pyramid, which is equal to s. You need to return the number of vertices,edges,

// faces, and the number of sides of the base of the pyramid.

//Examples
// 42 [11, 20, 11, 10]
// 102 [26, 50, 26, 25]
// 18 [5, 8, 5, 4]

function pyramid(s) {
  let N = (s - 2) / 4;
  let resultArr = [];
  resultArr.push(N + 1, 2 * N, N + 1, N);
  return resultArr;
}

console.log(pyramid(42));
console.log(pyramid(102));
