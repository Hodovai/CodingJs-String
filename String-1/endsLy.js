// Given a string, return true if it ends in "ly".

// Examples

// endsLy('oddly') → true
// endsLy('y') → false
// endsLy('oddl') → false
function endsLy(str){
    return str.slice(-2) == 'ly';
  }
  console.log(endsLy('oddly')); // --> true
  console.log(endsLy('y')); // --> false
  console.log(endsLy('oddl')); // --> false