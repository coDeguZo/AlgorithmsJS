// LeetCode Problem #35 Search Insert Position

// Given a sorted array and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:
// Input: [1,3,5,6], 5
// Output: 2

// Example 2:
// Input: [1,3,5,6], 2
// Output: 1

// Example 3:
// Input: [1,3,5,6], 7
// Output: 4

// Example 4:
// Input: [1,3,5,6], 0
// Output: 0

let array = [1,3,5,6]
let target = 7

var searchInsert = (nums, target) => {
  if (nums.indexOf(target) === -1){
    nums.push(target)
    let sorted = nums.sort((a,b) => a - b)
    return sorted.indexOf(target)
  }
  return nums.indexOf(target)
}