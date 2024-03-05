// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@


function lastChars(a, b){
if(a.length == 0 && b.length == 0){
    return  '@@';}
    if(a.length >= 1 && b.length>= 1){
        return a[0] + b[b.length-1];}
        if(a.length==0)
         {return '@'+b[b.length-1]}
         if(b.length==0)
          {//return a[a.length-1]+'@'
          return a[0] +'@'
        }

     }
     console.log(lastChars('last', 'chars'));//la
      console.log(lastChars('yo', 'java'));//ya
       console.log(lastChars('hi', ''));//'h@@'