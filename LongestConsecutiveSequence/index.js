// Longest Consectutive Stretch

// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

let array = [100,4,200,1,3,2]

const longestConsecutive = nums => {
  let newNums = new Set(nums);
  let result = 0;
  for(let num of newNums) {
      // if(newNums.has(num-1))
      //     continue;
      let count = 1;
      while(newNums.has(num+count))
          count++; 
          result = Math.max(result,count);
  }
  return result;
  
};

console.log(longestConsecutive(array))