function largestLetterAlphabeticalOrder(str) {
  
  const sortedArray = str.toLowerCase().split('').sort()

  return sortedArray[sortedArray.length - 1]
}

console.log(largestLetterAlphabeticalOrder('Hello World')); // result w
console.log(largestLetterAlphabeticalOrder('Bankaii')); // result n
console.log(largestLetterAlphabeticalOrder('Juniores')); // result u
