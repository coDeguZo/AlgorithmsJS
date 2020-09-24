// Leet Code Problem 53

// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer 
// approach, which is more subtle.


let nums = [-2,1,-3,4,-1,2,1,-5,4]

// var maxSubArray = function(nums) {
//   let currentMax = nums[0];
//   let max = nums[0];

//   for (let i = 1; i < nums.length; i += 1) {
//     debugger
//     currentMax = Math.max(currentMax + nums[i], nums[i]);
//     max = Math.max(currentMax, max);
//   }
//   return max;
// };

const maxSubArray = nums => {
  // let max = nums[0]
  // let sum = nums[0]
  // for (let i = 1; i < nums.length; i++){
  //   sum = Math.max(sum + nums[i], nums[i])
  //   max = Math.max(max, sum)
  // }
  // return max
  for (let i = 0; i < nums.length; i++){
    for (let j = 0; j < nums.length; j++){
      debugger
    }
  }
}

console.log(maxSubArray(nums))

