function hasTargetSum(array, target) {
  for(let i =0; i < array.length - 1; i++){
    if(array.slice(i+1).includes(target - array[i])) return true
  }
  return false
}

function hasTargetSum2(array, target){
  if(array.length === 2) return target - array[0] === array[1]
  else{
    array.slice(1).includes(target-array[0]) ?  true : hasTargetSum2(array.slice(1), target)
  }
  return true
}
  

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("RECURSIVE:");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum2([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum2([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum2([4, 2], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum2([4, 2], 6));
}

module.exports = hasTargetSum;
