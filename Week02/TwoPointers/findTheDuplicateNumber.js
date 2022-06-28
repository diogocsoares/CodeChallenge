/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
               1 2 3 4 5
               0 1 2 3 4
Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n

All the integers in nums appear only once except for precisely one integer which appears two or more times.
*/

//Approach: Use two pointers pattern, pointer A moves to the right and B to the left. 
//Pointer A moves one position each time and pointer B moves from the last position until position adjacent to point B.
// keep moving until finding an duplicate or point A reach the last position adjacent to point B at the end.

// nums[1, 3, 4, 2, 2].length(5) - 2 -> (3)
// pointerA = 3 -> [2]
// PointerB = 4 -> [2]

var findDuplicate = function (nums) {
   let pointerA = 0;
   let pointerB = nums.length - 1;
   while (pointerA < nums.length - 1) {
      if (nums[pointerA] === nums[pointerB])
         return nums[pointerA];
      else {
         if (pointerB > pointerA + 1)
            pointerB--;
         else if (pointerA < nums.length - 2) {
            pointerB = nums.length - 1;
            pointerA++
         }
      }
   }
}; // It can be implemented using two pointer but for big array will Exceed Time Limit.

// console.log(findDuplicate([1, 3, 4, 2, 2]));
// console.log(findDuplicate([3, 1, 3, 4, 2]));


var findDuplicateV2 = function (nums) {
   let pointerA = 0;
   let pointerB = nums.length - 1;
   let mapNum = new Set();
   while (pointerA < pointerB + 1) {
      if (nums[pointerA] === nums[pointerB])
         return nums[pointerA];
      if (mapNum.has(nums[pointerA]))
         return nums[pointerA];
      if (mapNum.has(nums[pointerB]))
         return nums[pointerB];
      else {
         mapNum.add(nums[pointerA]);
         mapNum.add(nums[pointerB]);
         pointerB--;
         pointerA++;
      }
   }
}; //Using an set to store the keys increase the space complexity. To solve this problem uses only constant extra space an better approach could be using Fast and Slow pointers (Hare & Tortoise algorithm)

// console.log(findDuplicateV2([1, 3, 4, 2, 2]));
// console.log(findDuplicateV2([3, 1, 3, 4, 2]));


var findDuplicateV3 = function (nums) {
   let tortoise = nums[0];
   let hare = nums[0];

   while (true) {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];
      if (tortoise === hare)
         break;
   }

   hare = nums[0];
   while (hare != tortoise) {
      hare = nums[hare];
      tortoise = nums[tortoise];
   }
   return hare;
}; //Fast and Slow pointers (Hare & Tortoise algorithm)

console.log(findDuplicateV3([1, 3, 4, 2, 2]));
console.log(findDuplicateV3([3, 1, 3, 4, 2]));