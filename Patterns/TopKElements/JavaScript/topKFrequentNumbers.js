/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 
Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

//Approach:
// - Insert each number as key and counter as value. If an number exists increment the counter.
// - At the end insert each element from the hash table to the priority queue.
// - At the end delete the top until the deleted element be less than K. Insert deleted elements in the result array.
// - Return the result array.
const PriorityQueue = require('../../DataStructures/Heap/priorityQueue');

var topKFrequent = function (nums, k) {
   if (nums.length === 1)
      return nums;
   let countHash = new Map();
   let result = [];
   for (let i = 0; i < nums.length; i++) {
      const count = countHash.get(nums[i]);
      if (count)
         countHash.set(nums[i], count + 1);
      else
         countHash.set(nums[i], 1);
   }

   const priorityQueue = new PriorityQueue();
   for (let key of countHash)
      priorityQueue.insert(key[0], key[1])

   for (let i = 1; i <= k; i++)
      result.push(priorityQueue.deleteMax()[0]);

   return result;
};

//Fast solution from LeetCode but hard to understand.
var fastTopKFrequent = function (nums, k) {
   if (k === nums.length)
      return nums;

   const hashMap = new Map();

   nums.forEach((num) => {
      hashMap.has(num) ? hashMap.set(num, hashMap.get(num) + 1) : hashMap.set(num, 1);
   });

   return [...hashMap.entries()].sort(([, aval], [, bval]) => aval > bval ? -1 : 1).map((val) => val[0]).slice(0, k);
};

var fastReadableTopKFrequent = function (nums, k) {

   // create hash of item => count
   // 1 => 3
   // 2 => 2
   // 3 => 1

   const itemCounts = nums.reduce((hash, num) => {
      let count = hash.get(num);
      if (count === undefined) count = 0;
      hash.set(num, ++count);
      return hash;
   }, new Map());

   // sort items by count
   const sortedEntries = [...itemCounts.entries()].sort((entry1, entry2) => entry2[1] - entry1[1]);

   // return first k items
   return sortedEntries.map(entry => entry[0]).filter((item, index) => index < k);
};


console.log(fastTopKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(fastReadableTopKFrequent([1, 1, 1, 2, 2, 3], 2))
