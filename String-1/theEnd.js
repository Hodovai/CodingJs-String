// Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

// Examples

// theEnd('Hello', true) → H
// theEnd('Hello', false) → o
// theEnd('oh', true) → o
function theEnd(str, front){
    return front ? str.charAt(0):str.slice(-1);
 }
 console.log(theEnd("Hello",true)); //H
 console.log(theEnd("Hello",false)); //o</
 console.log(theEnd("oh",true)); //o</