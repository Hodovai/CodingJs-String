// Examples

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str){

  if(str.length <2)
  return false;
if(str.substrin(0,2) == str.substring(str.length-2))
return true;
else
return false;

}
console.log(frontAgain('edited')); // → true
console.log(frontAgain('edit'));   // → false
console.log(frontAgain('ed'));     // → true