function multiply(a, b){
    return a + b
}

// /[^a-z0-9]+/g
// [^a-z] matches the characters that is not found between a and z
// [^0-9] matches the characters that is not found between 0 and 9
// The g flag says that it should be a global search. It will look for every occurrence instead of just the first one.

let string1 = "rAce       car"
let string2 = "napkin"
let string3 = "1234321"
let string4 = "annA"
let string5 = "Murder for a jar of red rum"


function palindrome(string) {
    let replacementString = string.toLowerCase().replace(/[^a-z0-9]+/g, "")
    let reversed = string.toLowerCase().replace(/[^a-z0-9]+/g, "").split("").reverse().join("")
    debugger
    if (replacementString === reversed){
        console.log(true)
    } else {
        console.log(false)
    }
}

// palindrome(string3)

// function checkPalindrome(string) {
//     let reverseString = string.split("").reverse().join("")
//     console.log(string === reverseString)
//   }

// checkPalindrome(string3)

function palindrome(str){
    let replaced = str.toLowerCase().replace(/[^a-z0-9]+/g, "")
    let reversed = str.toLowerCase().replace(/[^a-z0-9]+/g, "").split("").reverse().join("")
    console.log(reversed)
}

palindrome(string1)