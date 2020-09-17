// Write a JavaScript function that removes all duplicate elements from an array

let array = [1,2,3,3,4,4,5]

// O(n) 
const removeDuplicateElements = (array) => {
  let newObj = {}
  let filteredArray = []
  for(let i = 0; i < array.length; i++){
    if(!newObj[array[i]]){
      newObj[array[i]] = true
      filteredArray.push(array[i])
    }
  }
  return filteredArray
}

// O(n) with a forEach
const removeDuplicateElementss = (array) => {
  let newObj = {}
  let filteredArray = []
  array.forEach(num => {
    if(!newObj[num]){
      newObj[num] = true
      filteredArray.push(num)
    }
  })
  return filteredArray
}

// Fastest Method
const removeDuplicateElementsss = (array) => {
  let newSet = new Set(array)
  let newArray = [...newSet]
  return newArray
}

function unique(arr) {
  // your code
    let filtered = arr.filter((num, index, array) => {
      return arr.indexOf(num) === index
    })
    return filtered
}

console.log(unique(array))