//Split function: 

function stringToArray(string){
  return string.split(' ');

}

//Replace function:

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
  
}

// Max & Min functions:

var min = function(list){
 return Math.min(...list);
  }
    

var max = function(list){
    return Math.max(...list);
}

// Math.Min + IndexOf:

function min(arr, toReturn) {
  let result = 0;
  
  if (toReturn === "value"){
    result = Math.min(...arr);
    
  } else{
    result = arr.indexOf(Math.min(...arr));
  }
  return result;
  }

// Math.Min for arrays:

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//Cicle circumference:
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}
