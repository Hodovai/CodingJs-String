function startWord(str, word){
   let len = word.length;
   if(str.substring(0,len) == word){
       return word;
}
if(str.substring(1,len)==word.substring(1)) { 
    return str.substring(0,len);
}
return "";}
// startWord('hippo', 'hi') → hi
// startWord('hippo', 'xip') → hip
// startWord('hippo', 'i') → h
console.log(startWord("hippo", "hi")); // Output: hi
console.log(startWord("hippo", "xip")); // Output: hip
console.log(startWord("hippo", "i")); // Output: h