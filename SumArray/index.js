// # Leetcode Problem 1 Two Sum 
// ## Given an array of sorted numbers and a target sum, 
// find a pair in the array whose sum is equal to the given target.

// ## Write a function 
// to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
// ## Example 1:
// ## Input: [1, 2, 3, 4, 6], target=6
// # Output: [1, 3]# Explanation: The numbers at index 1 and 3 add up 
// to 6: 2+4=6
// # Example 2:## Input: [2, 5, 9, 11], target=11# Output: [0, 2]# Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

// O(n)
let functionArray = [1, 2, 3, 4, 6]
let functionTarget = 6

var twoSum = function(nums, target) {
  let hash = {};
  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if(hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
}

console.log(twoSum(functionArray, functionTarget))

// const sumArray = (array, target) => {
//   // Create an array to push indcies into.
//   const indexArray = []
//   // const indexLength = array.length
//   // Brute Force By using for loop to loop through the array.
//   // Add two numbers at the indcies together and if equal to 6 push the indeices into the indexArray.

//   for(let i = 0; i < array.length; i++){
//     if (array[i] + array[i + 1] === target){
//       return indexArray.push(i, j)
//     }
//   }
// }

// console.log(sumArray(functionArray, functionTarget))
