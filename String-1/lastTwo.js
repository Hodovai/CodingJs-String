// lastTwo('coding') → codign
// lastTwo('cat') → cta
// lastTwo('ab') → ba
function lastTwo(str){
  return str.slice(0,str.length-2) + str.slice(-1) + str.slice(-2,-1) ;
}
console.log(lastTwo("coding"));  // -> "codign"
console.log(lastTwo("cat"));    // -> "cta"
console.log(lastTwo("ab"));     // -> "ba"