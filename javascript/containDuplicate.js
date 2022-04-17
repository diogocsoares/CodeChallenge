//https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
   let unique = new Set(nums);
   return (unique.size != nums.length);
}; // Runtime 105 ms / Memory 51.1MB

var containsDuplicateV2 = function (nums) {
   let uniqueV2 = new Object();
   if (nums.length <= 1) return false;
   uniqueV2[nums[0]] = nums[0];
   for (let i = 1; i <= nums.length - 1; i++) {
      if (uniqueV2[nums[i]] != undefined) {
         return true;
      }
      else uniqueV2[nums[i]] = nums[i];
   }
   return false;
}; // Runtime 99 ms / Memory 51.1MB

var containsDuplicateV3 = function (nums) {
   let uniqueV3 = new Map();
   if (nums.length <= 1) return false;
   uniqueV3.set(nums[0]);
   for (let i = 1; i <= nums.length - 1; i++) {
      if (uniqueV3.has(nums[i])) {
         return true;
      }
      else uniqueV3.set(nums[i]);
   }
   return false;
}; //Runtime 91 ms / Memory 50.6MB

var containsDuplicateV4 = function (nums) {
   let uniqueV4 = new Set();
   for (let i = 0; i < nums.length; i++) {
      let currentElement = nums[i];
      if (!uniqueV4.has(currentElement)) {
         uniqueV4.add(currentElement);
      } else {
         return true;
      }
   }
   return false;
} //Runtime 125 ms / 50.1MB

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

console.log('');
console.log(containsDuplicateV2([1, 2, 3, 1]));
console.log(containsDuplicateV2([1, 2, 3, 4]));
console.log(containsDuplicateV2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

console.log('');
console.log(containsDuplicateV2([1, 2, 3, 1]));
console.log(containsDuplicateV2([1, 2, 3, 4]));
console.log(containsDuplicateV2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

console.log('');
console.log(containsDuplicateV4([1, 2, 3, 1]));
console.log(containsDuplicateV4([1, 2, 3, 4]));
console.log(containsDuplicateV4([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));