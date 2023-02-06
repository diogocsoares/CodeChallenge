/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
*/

//Approach: Using two heaps.
// Divide the array y two parts A and B.
// HeapFy part A in a min heap.
// HeapFy part B in a max heap.
// obtain the last element from heap A (the bigger) and the first element from heap B.
//Sum element K ans J and than divide by 2 and return it.


var MedianFinder = function () {
   this.items = []
   this.maxHeap = new Heap();
   this.minHeap = new Heap(0);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
   if (num === null || num === undefined)
      return;

   if (this.maxHeap.items[0] > num || this.maxHeap.size === 0)
      this.maxHeap.insert(num);
   else
      this.minHeap.insert(num);

   if (this.maxHeap.size > this.minHeap.size + 1)
      this.minHeap.insert(this.maxHeap.deleteMax());
   else if (this.minHeap.size > this.maxHeap.size + 1)
      this.maxHeap.insert(this.minHeap.deleteMax());
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {


   if (this.maxHeap.size === this.minHeap.size) {
      return ((this.maxHeap.items[0] + this.minHeap.items[0]) / 2);
   }
   else if (this.maxHeap.size > this.minHeap.size) {
      return this.maxHeap.items[0];
   }
   else {
      return this.minHeap.items[0];
   }
};

class Heap {
   constructor(type) {
      this.items = [];
      this.size = this.items.length;
      this.type = type === 0 ? 'min' : 'max';
   }

   leftChild(index) {
      let child = 2 * index + 1;
      return child > this.size - 1 ? null : child;
   }

   rightChild(index) {
      let child = 2 * index + 2;
      return child > this.size - 1 ? null : child;
   }

   parent(index) {
      return Math.trunc((index - 1) / 2);
   }

   isPerfect() {
      let missingElements = true;
      for (let i = 0; i < this.size; i++)
         if (this.items[i] === null)
            return false;
      return missingElements
   }

   printHeap() {
      return this.items.slice(0, this.size);
   }

   insert(value) {
      //increase heap size only if it is necessary this.size (used space) vs this.items.length (available space)
      if (this.size < this.items.length)
         this.items[this.size] = value;
      else
         this.items.push(value);
      this.size++;
      let compared = this._compare(this.size - 1, this.parent(this.size - 1));
      this._moveUp(this.parent(this.size - 1), compared);
      return this.items;
   }

   deleteMax() {
      let deletedValue = this.items[0];
      this.items[0] = this.items[this.size - 1];
      this.items[this.size - 1] = deletedValue;
      this.size--;
      this._moveDown(0);
      return deletedValue;
   }


   _compare(index1, index2) {
      let result = [];
      let minValue = this.type === 'max' ? Number.NEGATIVE_INFINITY : Number.MAX_VALUE;

      let value1 = this.items[index1] === undefined || this.items[index1] === null ? minValue : this.items[index1];
      let value2 = this.items[index2] === undefined || this.items[index2] === null ? minValue : this.items[index2];
      if (this.type === 'max') {
         result.push(value1 > value2 ? index1 : index2);
         result.push(this.items[result[0]]);
      } else {
         result.push(value1 > value2 ? index2 : index1);
         result.push(this.items[result[0]]);
      }
      return result[0] > this.size - 1 ? [0, 0] : result;
   }

   _moveUp(parentIndex, compared) {
      while (parentIndex != compared[0]) {
         let parentValue = this.items[parentIndex];
         this.items[parentIndex] = compared[1];
         this.items[compared[0]] = parentValue;
         if (parentIndex > 0) {
            let holdParent = parentIndex;
            parentIndex = this.parent(parentIndex);
            compared = this._compare(holdParent, parentIndex);
         } else compared[0] = 0;
      }
   }
   _moveDown(index) {
      let compared = this._compare(this.leftChild(index), this.rightChild(index));
      compared = this._compare(index, compared[0]);
      while (index != compared[0] && this.leftChild(index)) {
         let parentValue = this.items[index];
         this.items[index] = compared[1];
         this.items[compared[0]] = parentValue;
         index = compared[0];
         if (this.leftChild(index)) {
            compared = this._compare(this.leftChild(index), this.rightChild(index));
            compared = this._compare(index, compared[0]);
         } else compared[0] = 0;
      }
   }
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
**/




var obj = new MedianFinder()
obj.addNum(-1);
obj.addNum(-2);
obj.addNum(-3);
obj.addNum(-4);
console.log(obj.findMedian());
// obj.addNum(-5);

//obj.addNum(5);


module.exports = MedianFinder;