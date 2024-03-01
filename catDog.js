// Return true if the string "cat" and "dog" appear the same number of times in the given string.

// Examples

// catDog('catdog') → true
// catDog('catcat') → false
// catDog('1cat1cadodog') → true

function catDog(str) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i <= str.length - 2; i++) {
        if (str.substring(i, i + 3) === "dog") {
            count1++;
        } if (str.substring(i, i + 3) === "cat") {
            count2++;
        }
    }
    return count1 === count2;
}
console.log(catDog("catdog"));//true
console.log("catcat");//false
console.log("1cat1cadodog");//true