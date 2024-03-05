// Examples

// makeOutWord('<<>>', 'Yay') → <>
// makeOutWord('<<>>', 'WooHoo') → <>
// makeOutWord('[[]]', 'word') → [[word]]


function makeOutWord(out, word){
    return out.substring(0, 2) + word + 
    out.substring(out.length - 2);
}
console.log(makeOutWord('<<>>', 'Yay'));//<>
console.log(makeOutWord('<<>>', 'WooHoo'));//<>
console.log(makeOutWord('[[[]]', 'word'));//[[word]]
