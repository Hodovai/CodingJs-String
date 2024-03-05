// makeTags('i', 'Yay') → Yay
// makeTags('i', 'Hello') → Hello
// makeTags('cite', 'Yay') → Yay
function makeTags(tag, word){
  return "<"  + tag + ">" + word + "</" + tag + ">";
}
console.log(makeTags('i', 'Yay'));// Yay
console.log(makeTags('i', 'Hello'));// Hello
console.log(makeTags('cite', 'Yay'));// Yay
