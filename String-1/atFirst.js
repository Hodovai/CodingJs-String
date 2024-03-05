function atFirst(str) {
    if (str.length >= 2) {
        return str.slice(0, 2);
    }
    if (str.length === 1) {
        return str + "@";
    }
    if (str.length === 0) {
        return "@@";
    }
}
// atFirst('hello') → he
// atFirst('hi') → hi
// atFirst('h') → h@
console.log(atFirst("hello")); //Output: "he"
console.log(atFirst("hi")); //Output: "hi"
console.log(atFirst("h")); //Output: "h@"

