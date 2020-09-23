// Leetcode Problem #5 Longest Palindrom Substring

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: "cbbd"
// Output: "bb"

let string = "babad"

// Expand Around Center solution
// T O(N^2)
// S O(1)
const longestPalindrome = function(s) {
  // Variable was created for Max '' containing palindrome
  let max = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
          let left = i;
          let right = i + j;
          while (left >= 0 && s[left] === s[right]) {
              left--;
              right++;
          }
          if ((right - left - 1) > max.length) {
            max = s.substring(left + 1, right);
          }   
      }
      // No better move exists
      if (Math.ceil(max.length / 2) >= s.length - i) break;
  }
  return max;
};

console.log(longestPalindrome(string))