// Examples

// twoChar('java', 0) → ja
// twoChar('java', 2) → va
// twoChar('java', 3) → ja

function twoChar(str, index){
    if( str.length  <= index + 1||index < 0   )
    {return str. substring(0, 2);}
     return str.substr(index,2);
    }
    console.log(twoChar("java", 0));//ja
    console.log(twoChar("java", 2));//va
    console.log(twoChar("java", 3));//ja

