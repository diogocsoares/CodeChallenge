var search = function (nums, target) {
   let ini = 0;
   let end = nums.length - 1;
   let middle;
   while (ini <= end) {
      middle = (ini + end) >>> 1; //using Unsigned right shift (>>>) or Bitwise operations
      if (nums[middle] === target)
         return middle;
      else if (target > nums[middle])
         ini = ++middle;
      else
         end = --middle;
   }
   return -1;
};



console.log(search([-1, 0, 3, 5, 9, 12], 5));
