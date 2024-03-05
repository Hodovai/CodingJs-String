// Examples

// withoutEnd2('Hello') → ell
// withoutEnd2('abc') → b
// withoutEnd2('ab') →

function withoutEnd2(str){

return str.slice(1,str.length-1)
}
console.log(withoutEnd2('Hello'));//ell
console.log(withoutEnd2('abc'));//b
console.log(withoutEnd2('ab'));
