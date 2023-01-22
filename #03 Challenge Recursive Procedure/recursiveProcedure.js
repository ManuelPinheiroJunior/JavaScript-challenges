function parts(num) {
 if ( num === 0 ) {
   return ''
 }

 if ( num === 1 ) {
   return 'parts'
 } else {
   return 'parts-' + parts(num-1)
 }
}

console.log(parts(6)) // result parts-parts-parts-parts-parts-parts
console.log(parts(2)) // result parts-parts
console.log(parts(3))  // result parts-parts-parts
console.log(parts(10)) // result parts-parts-parts-parts-parts-parts-parts-parts-parts-parts
