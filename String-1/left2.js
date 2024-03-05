// Examples

// left2('Hello') → lloHe
// left2('java') → vaja
// left2('Hi') → Hi

function left2(str){
    if(str.length == 2){
        return str;  
    } 
return str.slice(2) + str.substring(0,2);
}
console.log(left2('Hello') );
console.log(left2('java'));
console.log(left2('Hi'));
