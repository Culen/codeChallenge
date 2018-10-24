function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }

var input = "reverse me!";

console.log("original: " + input);

console.log("reversed: " + reverse(input));