// Examples

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false

function hasBad(str){
    if(str.slice(0,3) == 'bad' || str.slice(1,4) == 'bad'){
        return true;
}
else {
   return false;
}
}
console.log(hasBad("badxx"));//true
console.log(hasBad("xbadxx"));//true
console.log(hasBad("xxbadxx"));//false
