// LeetCode Problem #3  Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


let str = "abcabbcbb"

var lengthOfLongestSubstring = function(str) {
  // Create a longest counter variable to keep track of longest substring without replacing chars.
  // Create a "current" variable to hold in place the current string of chars
  let longest = 0
  let current = ""

  for (let i = 0; i < str.length; i++){
    current = current.substring(current.indexOf(str[i]) + 1)
    current += str[i]
    if (current.length > longest){
      longest = current.length
    }
  }

  return longest
}

console.log(lengthOfLongestSubstring(str))