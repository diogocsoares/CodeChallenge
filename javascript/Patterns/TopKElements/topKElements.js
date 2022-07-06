const Heap = require('../../DataStructures/Heap/heap');

function topKElement(nums) {
   let heap = new Heap(nums.slice(0, 2));
   for (let i = 3; i < nums.length; i++) {
      if (nums[i] > heap.items[0]) {
         heap.deleteMax();
         heap.insert(nums[i]);
      }
   }
   return heap.items[0];
}

console.log(topKElement([5, 5, 5, 5, 5, 1]));