class PriorityNode {
   constructor(value, priority) {
      this.value = value;
      this.priority = priority;
   }
}

class PriorityQueue {
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

   printHeap() {
      return this.items.slice(0, this.size);
   }

   insert(value, priority) {
      const priorityNode = new PriorityNode(value, priority);
      if (this.size < this.items.length)
         this.items[this.size] = priorityNode;
      else
         this.items.push(priorityNode);
      this.size++;
      let compared = this._compare(this.size - 1, this.parent(this.size - 1));
      this._moveUp(this.parent(this.size - 1), compared);
      return this.items;
   }

   deleteMax() {
      if (this.size === 0)
         return [];
      let deletedValue = this.items[0];
      this.items[0] = this.items[this.size - 1];
      this.items[this.size - 1] = deletedValue;
      this.size--;
      this._moveDown(0);
      return [deletedValue.value, deletedValue.priority];
   }

   _compare(index1, index2) {
      let result = [];
      let minValue = this.type === 'max' ? Number.NEGATIVE_INFINITY : Number.MAX_VALUE;

      let value1 = this.items[index1]?.priority === undefined || this.items[index1]?.priority === null ? minValue : this.items[index1].priority;
      let value2 = this.items[index2]?.priority === undefined || this.items[index2]?.priority === null ? minValue : this.items[index2]?.priority;
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
         let parentNode = this.items[parentIndex];
         this.items[parentIndex] = compared[1];
         this.items[compared[0]] = parentNode;
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
         let parentNode = this.items[index];
         this.items[index] = compared[1];
         this.items[compared[0]] = parentNode;
         index = compared[0];
         if (this.leftChild(index)) {
            compared = this._compare(this.leftChild(index), this.rightChild(index));
            compared = this._compare(index, compared[0]);
         } else compared[0] = 0;
      }
   }
}

// const line = new PriorityQueue();
// line.insert(1, 3);
// line.insert(2, 2);
// line.insert(3, 1);
// line.insert(4, 4);
// console.log(line.deleteMax());
// console.log(line.deleteMax());
// console.log(line.deleteMax());
// console.log(line.deleteMax());


module.exports = PriorityQueue;

