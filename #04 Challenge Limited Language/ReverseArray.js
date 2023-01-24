function reverse(arr) {
  const reservedArray = [];

  for (let i = 0; i < arr.length; i++)
    [(reservedArray[i] = arr[arr.length - 1 - i])];

  return reservedArray;
}

console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7])); // result 7, 5, 1, 9, 8, 6, 9, 0
console.log(reverse(["Hey", "Bell", "Cranel"])); // result 'Cranel', 'Bell', 'Hey'
console.log(reverse([true, false, true, false])); // result false, true, false, true
console.log(reverse(["know", "ok", false, 0])); // result 0, false, 'ok', 'know'
