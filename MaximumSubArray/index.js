// Leet Code Problem 53

// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer 
// approach, which is more subtle.


let nums = [-1]

function maxSubArray(arr) {
  let max = 0;
  let sum = 0;

  for (let num of arr) {
    sum += max
    max = Math.max(max, sum); 
    if (sum < 0) sum = 0
  }
  return max;
}

console.log(maxSubArray(nums))