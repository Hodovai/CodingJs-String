// Examples

//     makeAbba('Hi', 'Bye') → HiByeByeHi
//     makeAbba('Yo', 'Alice') → YoAliceAliceYo
//     makeAbba('What', 'Up') → WhatUpUpWhat


function makeAbba(a, b){

return a + b +b+ a;

}
console.log(makeAbba("Hi", "Bye"));//HiByeByeHi
console.log(makeAbba("Yo", "Alice"));//YoAliceAliceYo
console.log(makeAbba("What", "Up"));//WhatUpUpWhat