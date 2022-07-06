/*
               A
         B           C
      D     E     F     G

Array: [ A, B, C, D, E, F, G]
         0  1  2  3  4  5  6

Node index -> i
Left Child -> 2*i+1
Right Child -> 2*i+2
Parent -> Flor(i/2 ) ⎣i+1/2⎦

/* This is an invalid Binary Tree or imperfect can't be used as a Heap
               A
         B           C
     D            E     F

Array: [ A, B, C, null, null, D, E]
         0  1  2  3  4  5  6

/*
               A
         B           C
      D     E

Array: [ A, B, C, D, E]
         0  1  2  3  4

*/

const Tree = require('../../DataStructures/Trees/trees');

var labHeap = ['A', 'B', 'C', 'D', 'E', 'F', 'G',]
var i = 2;
// console.log('Node', i);
// console.log('Left Child', ((a = 2 * i + 1, b = labHeap.length) => { return a > b ? null : a })());
// console.log('Right Child', ((a = 2 * i + 2, b = labHeap.length) => { return a > b ? null : a })());
// console.log('Parent', Math.floor((i + 1) / 2));

class Heap {
   constructor(value, type) {
      value = value === null || undefined ? 0 : value;
      this.items = Array.isArray(value) ? value : [value];
      this.size = this.items.length;
      this.type = type === 0 ? 'min' : 'max';
      this.heapFy();
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

   reorder() {
      let holdSize = this.size;
      while (this.size > 0) {
         this.deleteMax()
      }
      this.size = holdSize;
      return this.printHeap();
   }

   heapFy() {
      for (let i = 0; i < this.items.length; i++) {
         if (i > 0) {
            let parentIndex = this.parent(i);
            let compared = this._compare(i, parentIndex);
            this._moveUp(parentIndex, compared);
         }
      }
      return this.printHeap();
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


// const maxHeap = new Heap([-1,-2,-3,-4,-5]);
// maxHeap.heapFy();
// console.log(maxHeap.printHeap());

// console.log(maxHeap.items);
// maxHeap.deleteMax();
// console.log(maxHeap.items);
// console.log(maxHeap.printHeap());
// console.log(maxHeap.insert(60));
//console.log(maxHeap.reorder());
// const maxHeapUnordered = new MaxHeap([50, 30, 20, 15, 10, 8, 16]);
// console.log(maxHeapUnordered.printHeap());
// console.log(maxHeapUnordered.heapFy());

module.exports = Heap;


