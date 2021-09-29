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

