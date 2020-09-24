// Leetcode Problem #27 Remove Element


let nums = [0,1,2,2,3,0,4,2]
let val = 2
// We want an array length of 5

var removeElement = function(nums, val) {
  for( var i = nums.length -1; i >= 0 ; i--) {
    debugger
       if(nums[i] === val) nums.splice(i,1)
  }
   return nums.length;

  //  Iterating up the array and making the i = 0 will not work.
  // The array will splice the first 2 at the index and move all of the elements to the left.
  // This will cause the array to skip over the next 2, meaning that nums.length will be equal to 6

//   for (let i = 0; i < nums.length; i++){
//     debugger
//     if (nums[i] === val) nums.splice(i, 1)
// }
// return nums.length
};

console.log(removeElement(nums, val))