// 1. Write a function which takes a list of numbers and returns the length of the
// longest continuous stretch of a single number. For example, on the input [1,7,7,3],
// the correct return is 2, because there are two 7’;s in a row. On the input
// [1,7,7,3,9,9,9,4,9], the correct return is 3, since there are three 9’s in a row.

let array = [1, 7, 7, 3]
let array2 = [1,7,7,3,9,9,9,4,9]
// Should return the longest continuos stretch

// O(n)
const longestContinuousStretch = (array) => {
  let stretch = 0
  let longestStretch = 0
  let indexNum = ""
  for (let i = 0; i < array.length; i++){
    if (indexNum !== "" && indexNum === array[i]){
      stretch ++
    }
    else {
      stretch = 1
    }
    indexNum = array[i]
    if(stretch > longestStretch) {
      longestStretch = stretch;
    }
  }
  console.log(longestStretch)
}

longestContinuousStretch(array2)