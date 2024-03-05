// Examples

// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay

function deFront(str){
    if(str.slice(0,2) == 'ab'){
        return str;
 }
 if(str.slice(0,1) == 'a'){
    return str.slice(0,1)+ str.slice(2); 
}
if(str.slice(1,2) == 'b'){
    return str.slice(1);
}
return str.slice(2);
}
console.log(deFront("Hello"));//ll0
console.log(deFront("java"));//va
console.log(deFront("away"));//aay