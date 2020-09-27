let num = 14

// O(1)
// const isPerfectSquare = function(num) {
//   let sum = 0;
//   for(let i = 1; i <= num; i += 2){
//       sum += i;
//       debugger
//       if(sum === num){
//           return true;
//       }
//   }
//   return false;
// };

// O(1)
const isPerfectSquare = function(num) {
  //     Input = 14
  //     Return false
          return Math.sqrt(num) % 1 === 0;
  };


// console.log(isPerfectSquare(num))

// let arr = [1,2,3,4,5]

// let object = arr => {
//   let obj = {}
//   for (let i = 0; i < arr.length; i++){
//     obj[i] = arr[i]
//   }
//   return obj
// }
// console.log(object(arr))

let nums = [2, 7, 11, 15]
let target = 9

const twoSum = (nums, target) => {
  let obj = {}
  for (let [num, index] of nums.entries()){
    debugger
      let number = nums[index]
      if (obj[target - number] !== undefined){
          return [obj[target - number], index]
      }
      obj[number] = index
  }
  return []
}

console.log(twoSum(nums, target))

// let nums = new Set([1, 2, 3]);
// let array = []
// for (let num of nums) {
//     array.push(num)
// }
// console.log(array)