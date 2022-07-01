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

class HeapNode {
   constructor(value) {
      this.val = value;
      this.parent = null;
   }
}

class Heap {
   constructor(value) {
      value = value === null || undefined ? 0 : value;
      this.items = Array.isArray(value) ? value : [value];
      this.size = this.items.length;
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
}

class MaxHeap extends Heap {
   constructor(value) {
      super(value);
   }

   insert(value) {
      //increase heap size only if it is necessary this.size (used space) vs this.items.length (available space)
      if (this.size < this.items.length)
         this.items[this.size];
      else
         this.items.push(value);
      this.size++;
      let valueIndex = this.size - 1;
      let parentIndex = this.parent(valueIndex);
      while (this.items[parentIndex] < this.items[valueIndex]) {
         let parentValue = this.items[parentIndex];
         this.items[parentIndex] = value;
         this.items[valueIndex] = parentValue;
         valueIndex = parentIndex;
         parentIndex = this.parent(valueIndex);
      }
      return this.items;
   }

   deleteMax() {
      let currentIndex = 0;
      let deletedValue = this.items[currentIndex];
      this.items[currentIndex] = this.items[this.size - 1];
      this.items[this.size - 1] = deletedValue;
      let topValue = this.items[currentIndex];
      this.size--;
      let direction = this.items[currentIndex + 1] > this.items[currentIndex + 2] ? 1 : 2;
      while (direction > 0 && this.leftChild(currentIndex)) {
         let parentValue = this.items[direction];
         this.items[direction] = topValue;
         this.items[currentIndex] = parentValue;
         currentIndex = direction;
         direction += this.items[currentIndex + 1] > this.items[currentIndex + 2] ? 1 : 2;
      }
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

   //Need to verify
   heapFy() {
      let currentIndex = this.size - 1;
      let queue = [];

      while (!this.leftChild(currentIndex)) {
         queue.push(currentIndex);
         currentIndex--
      }

      for (let i = 0; i < queue.length; i++) {
         currentIndex = queue[i];
         let parentIndex = this.parent(currentIndex);
         currentIndex = currentIndex - (this.items[currentIndex] > this.items[currentIndex - 1] ? 0 : 1);
         while (this.items[parentIndex] < this.items[currentIndex]) {
            let parentValue = this.items[parentIndex];
            this.items[parentIndex] = this.items[currentIndex];
            this.items[currentIndex] = parentValue;
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex);
         }
      }
      return this.printHeap();
   }
}

//root
// const tree = new Tree(50);
// var holdNode;
// //level 1
// holdNode = tree.addLeft(tree.root, 30);
// tree.addLeft(holdNode, 15);
// tree.addRight(holdNode, 10);
// holdNode = tree.addRight(tree.root, 20);
// tree.addLeft(holdNode, 8);
// tree.addRight(holdNode, 16);

// tree.convertTree();
// console.log(tree.items);
//console.log(tree.isPerfect());

// const maxHeap = new MaxHeap([50, 30, 20, 15, 10, 8, 16]);
// console.log(maxHeap.items);
// console.log(maxHeap.deleteMax());
// console.log(maxHeap.items);
// console.log(maxHeap.printHeap());
const maxHeapUnordered = new MaxHeap([10, 20, 15, 12, 40, 25, 18]);
console.log(maxHeapUnordered.printHeap());
console.log(maxHeapUnordered.heapFy());

