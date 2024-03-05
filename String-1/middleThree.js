// Examples

// middleThree('Candy') → and
// middleThree('and') → and
// middleThree('solving') → lvi

function middleThree(str){
let middle = Math.floor(str.length / 2);
return str.substring(middle - 1, middle + 2);
}
console.log(middleThree("Candy"));//and
console.log(middleThree("and"));//and
console.log(middleThree("solving"));//lvi