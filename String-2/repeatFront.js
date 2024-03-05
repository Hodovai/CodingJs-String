// Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

// Examples

// repeatFront('Chocolate', 4) → ChocChoChC
// repeatFront('Chocolate', 3) → ChoChC
// repeatFront('Ice Cream', 2) → IcI

function repeatFront(str, n) {
    let result = "";
  let count = n;
    for (let i = 0; i < n; i++) {
        result += str.substring(0, count);
      count--;
    }
    return result;
}
console.log(repeatFront("Chocolate", 4)); // "ChocChoChC"
console.log(repeatFront("Chocolate", 3)); // "ChoChC"
console.log(repeatFront("Ice Cream", 2)); // "IcI"