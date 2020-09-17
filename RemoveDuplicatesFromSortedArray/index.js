// Leetcode Problem #26

// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

let array = [0,0,1,1,1,2,2,3,3,4]

// O(1); No created array can be used
var removeDuplicates = function(nums) {
  if(nums === null || nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    let count = 0;
      for(let i = 0; i< nums.length; i++) {
          if(nums[i] != nums[i+1]){
              count ++; 
              nums[count] = nums[i+1];
          }
      }
      return count;
  };

console.log(removeDuplicates(array))

// O(n)
var removeDuplicates = function(nums) {
  if(nums === null || nums.length === 0) return 0;
  let newNums = new Set(nums)
  let newArray = [...newNums]
  return newArray.length
};

console.log(removeDuplicates(array))