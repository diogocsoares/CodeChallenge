var missingNumber = function (nums) {
   nums.sort((a, b) => (a - b))
   for (let i = 0; i <= nums.length; i++) {
      if (nums[i] != i)
         return i;
   }
};

var missingNumber2 = function (nums) {
   let solution = new Array(nums.length + 1).fill(-1)
   for (const num of nums) {
      solution[num] = num
   }
   return solution.indexOf(-1)
}

var missingNumber3 = function (nums) {
   let sum = 0;
   for (let i = 0; i < nums.length; i++) {
      sum += i + 1 - nums[i];
   }
   return sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))