// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  let times = 0;

  // Simple solution
  //   for (let i = 0; i <= n; i++) {
  //     if (n % i === 0) times++;
  //   }

  // Optimized solution
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      times++;
      if (i !== n / i) times++;
    }
  }

  return times;
}

console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(30));
