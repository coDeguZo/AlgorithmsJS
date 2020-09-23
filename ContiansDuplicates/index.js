// Leetcode Problem 217 Easy

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

let array = [1, 2, 3, 4, 4]

var containsDuplicate = function(nums) {
  let set = new Set(nums)
  if ([...set].length === nums.length){
      return false
  } else {
      return true
  }
};

console.log(containsDuplicate(array))
