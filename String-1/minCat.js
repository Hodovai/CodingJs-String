// Examples

// minCat('Hello', 'Hi') → loHi
// minCat('Hello', 'java') → ellojava
// minCat('java', 'Hello') → javaello

function minCat(a, b) {
    if (a.length == b.length) {
        return a + b;
    }
    if (a.length >= b.length) {
        return a.slice(a.length - b.length) + b;
    } else {
        return a + b.slice(b.length - a.length);
    }
}
console.log(minCat("Hello", "Hi"));//loHi
console.log(minCat("Hello", "java"));//ellojava
console.log(minCat("java", "Hello"));//javaello