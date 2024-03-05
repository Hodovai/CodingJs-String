// Examples

// seeColor('redxx') → red
// seeColor('xxred') →
// seeColor('blueTimes') → blue

function seeColor(str){
    return str.startsWith('red')?'red': str.startsWith('blue')?'blue': '';
}
console.log(seeColor('redxx'));//red
console.log(seeColor('xxred'));
console.log(seeColor('blueTimes'));//blue