// Examples

// right2('Hello') → loHel
// right2('java') → vaja
// right2('Hi') → Hi

function right2(str){
if(str.length <=2){
    return str;
}
return str.slice(-2) + str.substring(0, str.length - 2);
}
