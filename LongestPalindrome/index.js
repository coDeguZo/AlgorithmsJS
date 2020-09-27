// Leetcode Problem #409 Longest Palindrome

let string = "abccccdddbcbbccdbddcbdbbdcbbdddd"

var longestPalindrome = function(s) {
  let result = 0;
  let obj = {};
  
  for (let char of s) {
    obj[char] = (obj[char] || 0) + 1;
    if (obj[char] % 2 == 0) result += 2;
  }
  debugger
  return s.length > result ? result + 1 : result;
};

console.log(longestPalindrome(string))