// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava


function nonStart(a, b){
    return a.slice(1) + b.slice(1);
}
console.log(nonStart("Hello", "There"));  //"ellohere"
console.log(nonStart("java", "code"));    //"avaode"
console.log(nonStart("shotl", "java"));   //"hotlava"</