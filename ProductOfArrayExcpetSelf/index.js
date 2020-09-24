// LeetCode Problem # 238


var productExceptSelf = function(nums) {
  let newArray =[];
    nums.reduce((total, currentValue, currentIndex) => {
        newArray[currentIndex] = total;
        debugger
        return total * currentValue;
    }, 1)

    nums.reduceRight((total, currentValue, currentIndex) => {
        newArray[currentIndex] *= total;
        return total * currentValue;
    }, 1)

    return newArray;
};

console.log(productExceptSelf([1,2,3,4]))
