/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
*/

var minSubArrayLen = function (target, nums) {
   let window = [0, 0];
   let sumWindow = 0;
   let answer = 0;
   for (let i = 0; i < nums.length; i++) {
      window[0] = i;
      window[1] = i;
      sumWindow = nums[i];
      if (sumWindow >= target)
         return 1;
      while (sumWindow < target && window[1] <= nums.length) {
         window[1]++;
         sumWindow += nums[window[1]];
         if (sumWindow >= target)
            if (answer === 0)
               answer = window[1] - window[0] + 1;
            else if (answer > window[1] - window[0] + 1)
               answer = window[1] - window[0] + 1;
      }
   }
   return answer;
};

//console.log(minSubArrayLen(1, [1, 4, 4]));
//console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
//console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
//console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));



var minSubArrayLenV2 = function (target, nums) {
   let result;
   let left = 0;
   let right = 0;
   let sumWindow = nums[left];
   while (right < nums.length) {
      if (sumWindow >= target) {
         result = result !== undefined ? Math.min(result, right - left + 1) : right - left + 1;
         sumWindow -= nums[left];
         left++;
         if (left > right) {
            right = left;
         }
      } else if (sumWindow < target) {
         right++;
         if (right < nums.length) {
            sumWindow += nums[right];
         }
      }
   }
   return result ?? 0;
};



//console.log(minSubArrayLenV2(1, [1, 4, 4]));
console.log(minSubArrayLenV2(7, [2, 3, 1, 2, 4, 3]));
//console.log(minSubArrayLenV2(11, [1, 1, 1, 1, 1, 1, 1, 1]));
//console.log(minSubArrayLenV2(11, [1, 2, 3, 4, 5]));
