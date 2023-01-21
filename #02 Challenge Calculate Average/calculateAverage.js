function calculateAverage(...numbers) {
  let sum = numbers.reduce((accum, num) => accum + num, 0);

  return sum / numbers.length;
}

console.log(calculateAverage(10, 9, 8, 8, 9, 1, 2, 7)); // result 6.75
console.log(calculateAverage(3, 5, 8, 1, -2)); // 3
console.log(calculateAverage(2, 10)); // 6
console.log(calculateAverage(10, 10, 10, 8, 9)); // 9.4
