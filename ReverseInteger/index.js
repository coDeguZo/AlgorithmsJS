// LeetCode Problem #7 Reverse Integer


// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows

let number = -321
const reverseInteger = x => {
  // x = 123    ;    -123
  // Output = 321     ; -321

  let string = x.toString()
  let parsedNumber = parseInt(string.split("").reverse().join(""))
  let signedNumber = parsedNumber * Math.sign(x)
  if (signedNumber > Math.pow(2, 31) || signedNumber < -Math.pow(2, 31)) return 0
}

console.log(reverseInteger(number))

