// Return the number of times that the string "hi" appears anywhere in the given string.

// Examples

// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2

function countHi(str){
    let count = 0;
   for (let i = 0; i <= str.length - 1; i++) {
      if (str.substring(i, i + 2) === "hi") {
            count++;     
    }
   }
    return count;
}
console.log(countHi("abc hi ho"));//1
console.log(countHi("ABChi hi"));//2
console.log(countHi("hihi"));//2