// Leetcode Problem 28 Implement strStr()

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.


const strStr = function(haystack, needle) {
  if (!needle) return 0
  return haystack.indexOf(needle)
}

console.log(strStr("hello", "ll"))
