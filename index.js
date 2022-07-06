function hasTargetSum(array, target){

  let response = false

  for (let i = 0; i < array.length; i++){
    
    for (let j = i + 1; j < array.length; j++){

      //console.log('array i: ', array[i])
      //console.log('array j: ', array[j])
      //console.log('array i + j: ', array[i] + array[j])

      if (array[i] + array[j] === target) {

        response = true

      }
    }
  }
  return response
}

/* 
  BIG O CALCULATION
  Define response
  Run through array n number of times and define i
  For each interation, run through array n number of times and define j
  (1 + 1(n) * 1(n - 1)) = n * n = n^2
*/

/* 
  PSEUDOCODE
  Loop through the array
  Add the first value with the second, third, fourth, etc and compare to the target
  If sum does not equal target, add the second value with the third, fourth, etc and compare
  Return false if not found
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([6, 2, 5], 11));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([9, 9, 9], 9));

}

module.exports = hasTargetSum;
