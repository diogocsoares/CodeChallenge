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


//The approach below using a fixing window size for each interaction results in Time Limit Exceeded for arrays with 1000 elements in leetcode.
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


//Below to resolve the Time Limit Exceeded we increase right and shrinks left while finding a solution. Maybe this approach can be considering two pointer because despite we are dealing with an unsorted array we are dealing with elements in the array is a pair, a triplet, or even a subarray.

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


var minSubArrayLenV3 = function (target, nums) {
   let minLength = Number.MAX_VALUE;
   let windowStart = 0;
   let currentSum = 0;
   let subarrayExist = false;

   for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      currentSum += nums[windowEnd];

      while (currentSum >= target) {
         minLength = Math.min(minLength, windowEnd - windowStart + 1);
         currentSum -= nums[windowStart];
         windowStart++;
         subarrayExist = true;
      }

   }
   minLength = subarrayExist ? minLength : 0;
   return minLength;
}


//console.log(minSubArrayLenV2(1, [1, 4, 4]));
console.log(minSubArrayLenV3(7, [2, 3, 1, 2, 4, 3]));
//console.log(minSubArrayLenV2(11, [1, 1, 1, 1, 1, 1, 1, 1]));
//console.log(minSubArrayLenV2(11, [1, 2, 3, 4, 5]));
