// Examples

// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → abc
function conCat(a, b){
  if(a.slice(-1)==b.slice(0,1)){
    return a+b.substring(1);
  }
  else{
    return a+b}
  }

console.log(conCat("abc", "cat")); // Output: "abcat
console.log(conCat("dog", "cat")); // Output: "dogcat"
console.log(conCat("abc", "")); // Output: "abc"