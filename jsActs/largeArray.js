// to Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let result = [];
  for(let i = 0;i<arr.length; i += 1 ){
    let individualArray = arr[i]
    let highestValue = 0;
    for(let j = 0; j< individualArray.length; j +=1){
      if(highestValue < individualArray[j]){

          highestValue = individualArray[j]
      }
      
    }
    result.push(highestValue)
  }
   return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
