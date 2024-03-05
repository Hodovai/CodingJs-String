// Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

// Examples

// mixString('abc', 'xyz') → axbycz
// mixString('Hi', 'There') → HTihere
// mixString('xxxx', 'There') → xTxhxexre
function mixString(a, b) {
    let newstr = '';
  
    if (a.length > b.length) {
      for (let i = 0; i < b.length; i++) {
        newstr += a[i] + b[i];
      }
      newstr += a.substring(b.length);
    } else if (a.length < b.length) {
      for (let i = 0; i < a.length; i++) {
        newstr += a[i] + b[i];
      }
      newstr += b.substring(a.length);
    } else {
      for (let i = 0; i < a.length; i++) {
        newstr += a[i] + b[i];
      }
    }
  
    return newstr;
  }
  console.log(mixString("abc", "xyz"))//axbycz
  console.log(mixString("Hi", "There")); //HTihere
  console.log(mixString("xxxx", "There")); //xTxhxexre
