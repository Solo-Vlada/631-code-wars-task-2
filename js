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
