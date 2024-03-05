// Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

// Examples

// nTwice('hello', 2) → helo
// nTwice('Chocolate', 3) → Choate
// nTwice('Chocolate', 1) → Ce
function nTwice(str, n){
    if(n == 0) {
      return ""}
    return str.slice(0, n)+str.slice(-n)
  }
  console.log(nTwice("hello", 2)); // "helo"
  console.log(nTwice( "Chocolate", 3)); // "Choate"
  console.log(nTwice("Chocolate", 1)); // "Ce"