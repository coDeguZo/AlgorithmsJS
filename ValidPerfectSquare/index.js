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


console.log(isPerfectSquare(num))

