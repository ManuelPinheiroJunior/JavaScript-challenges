function squareNumber(num) {
  
  const digitsArray = num.toString().split('')
  const squaredArray = digitsArray.map(digit => Number(digit) ** 2).join('')

  return Number(squaredArray)
}

console.log(squareNumber(323534)); // result 94925916
console.log(squareNumber(93234)); // result 8194916
console.log(squareNumber(15)); // result 125
console.log(squareNumber(2)); // result 4
