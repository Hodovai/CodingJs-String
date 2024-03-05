// Examples

// withoutEnd2('Hello') → ell
// withoutEnd2('abc') → b
// withoutEnd2('ab') →

function withoutX(str){
    if(str[0] =='x' && str[1] == 'x'){
        return str.slice(2);
    }
    if(str[0]==='x') 
    {return str.slice(1)};
    if(str[1] ==='x'){
        return str.slice(0,1)+str.slice(2);}
    

return str;
}
console.log(withoutEnd2('Hello'));
console.log(withoutEnd2('abc'));
console.log(withoutEnd2('ab'));
