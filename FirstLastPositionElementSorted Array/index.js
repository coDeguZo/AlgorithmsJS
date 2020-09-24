// LeetCode Problem #34 First and Last Position of Element in Sorted Array

var searchRange = function(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};