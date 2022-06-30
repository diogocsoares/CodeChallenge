class ListNode {
   constructor(value) {
      this.val = value,
         this.next = null,
         this.prev = null
   }
}

class DoublyLinkedList {
   constructor(value) {
      if (Array.isArray(value)) {
         this.length = 1;
         this._firstNode(value[0]);
         for (let i = 1; i < value.length; i++)
            this.append(value[i]);
      } else {
         this.length = 1;
         this._firstNode(value);
      }
   }

   append(value) {
      if (this.length === 0) {
         this._firstNode(value);
         return this;
      }
      const newNode = new ListNode(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
   }

   prepend(value) {
      if (this.length === 0) {
         this._firstNode(value);
         return this;
      }
      const newNode = new ListNode(value);
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
   }

   lookup(value) {
      return this.traverseToKey(value);
   }

   removeByValue(key) {
      if (this.length === 0)
         return false;

      if (this.length === 1 && this.head.val === key) {
         this.tail = null;
         this.head = null;
         this.length--;
         return this.printList();
      }

      let currentNode = this.head;
      let previousNode = this.head.prev;
      let nextNode = this.head.next;
      while (currentNode.next !== null) {
         if (currentNode.val === key) {
            if (currentNode.prev === null) {
               this.head = currentNode.next;
               this.head.prev = null;
               this.length--;
               return this.printList();
            } else {
               previousNode = currentNode.prev;
               nextNode = currentNode.next;
               previousNode.next = currentNode.next;
               nextNode.prev = currentNode.prev
               this.length--;
               return this.printList();
            }
         }
         currentNode = currentNode.next;
      }

      if (currentNode.next === null && currentNode.value === key) {
         previousNode = currentNode.prev;
         previousNode.next = null;
         this.tail = previousNode;
         this.length--;
         return this.printList();
      }
      return false;
   }

   removeByIndex(index) {
      if (index > this.length - 1 || this.length === 0)
         return false;

      if (index === 0) {
         const newHeadNode = this.head.next;
         if (newHeadNode)
            newHeadNode.prev = null;
         this.head = newHeadNode;
         this.length--;
         return this.printList();
      }

      const currentNode = this.traverseToIndex(index);
      if (currentNode) {
         const previousNode = currentNode.prev;
         const nextNode = currentNode.next
         if (nextNode) {
            previousNode.next = currentNode.next;
            nextNode.prev = currentNode.prev;
         } else {
            previousNode.next = null;
            this.tail = previousNode;
         }
         this.length--;
         return this.printList();
      } else {
         return false;
      }
   }

   insertByIndex(index, value) {
      if (this.length === 0) {
         this._firstNode(value);
         return this;
      }
      if (index >= this.length) {
         this.append(value);
         return this.printList();
      }
      if (index === 0) {
         this.prepend(value);
         return this.printList();
      }
      const currentNode = this.traverseToIndex(index);
      if (currentNode) {
         const newNode = new ListNode(value);
         const nextNode = currentNode.next;
         newNode.prev = currentNode;
         newNode.next = nextNode;
         currentNode.next = newNode;
         nextNode.prev = newNode;
         this.length++
         return this.printList();
      } else {
         this.append(value);
         return this.printList();
      }
   }

   insertByValue(key, value) {
      if (this.length === 0) {
         this._firstNode(value);
         return this;
      }
      let currentNode = this.traverseToKey(key);

      if (currentNode) {
         if (currentNode.next === null) {
            this.append(value);
            return this.printList();
         }
         const newNode = new ListNode(value);
         const nextNode = currentNode.next;
         newNode.prev = currentNode;
         newNode.next = nextNode;
         currentNode.next = newNode;
         nextNode.prev = newNode;
         this.length++
         return this.printList();
      } else {
         this.append(value);
         return this.printList();
      }
   }

   traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
         currentNode = currentNode.next;
         counter++;
      }
      return currentNode;
   }

   traverseToKey(key) {
      let currentNode = this.head;
      while (currentNode.next !== null) {
         if (currentNode.val === key)
            return currentNode;
         currentNode = currentNode.next;
      }
      return false;
   }

   printList() {
      const array = [];
      if (this.head)
         array.push(this.head.val);
      else
         return array;
      let currentNode = this.head;
      while (currentNode.next !== null) {
         currentNode = currentNode.next;
         array.push(currentNode.val);
      }
      return array;
   }

   _firstNode(value) {
      this.head = new ListNode(value);
      this.tail = this.head;
   }

};

const myNewLinkedList = new DoublyLinkedList(10);
myNewLinkedList.append(5);
//myNewLinkedList.append(16);
//console.log(myNewLinkedList.prepend(1));
console.log(myNewLinkedList.printList());
// myNewLinkedList.insertByValue(10, 2);
// myNewLinkedList.insertByValue(5, 3);
// myNewLinkedList.insertByValue(250, 50);
// myNewLinkedList.insertByValue(1, 99);
// console.log(myNewLinkedList.insertByIndex(200, 140));
// console.log('tail:', myNewLinkedList.tail);

// myNewLinkedList.insertByValue(140, 141);
// console.log('tail:', myNewLinkedList.tail);
// console.log(myNewLinkedList.lookup(80));
// console.log(myNewLinkedList.lookup(123));
//console.log(myNewLinkedList.removeByIndex(0));
//console.log(myNewLinkedList.removeByIndex(1));
//console.log(myNewLinkedList.removeByIndex(1));
//console.log(myNewLinkedList.removeByIndex(0));
//console.log(myNewLinkedList.removeByIndex(2));
// console.log(myNewLinkedList.head);

// console.log(myNewLinkedList.removeByValue(5));
// console.log(myNewLinkedList.removeByValue(10));
// console.log(myNewLinkedList.removeByValue(10));
// myNewLinkedList.append(5);
// myNewLinkedList.append(10);
// myNewLinkedList.prepend(16);
// console.log(myNewLinkedList.printList());
// console.log(myNewLinkedList.insertByIndex(1, 123));
// console.log(myNewLinkedList.removeByValue(1));
// console.log(myNewLinkedList.insertByValue(10, 2));
// console.log(myNewLinkedList.insertByValue(4545, 8));
// //console.log(myNewLinkedList.removeByValue(16));
// // console.log(myNewLinkedList.removeByValue(1));
// // console.log(myNewLinkedList.lookup(3));
// // console.log(myNewLinkedList.removeByValue(141));
// // console.log('tail:', myNewLinkedList.tail);
// // console.log(myNewLinkedList.removeByIndex(6));
// // console.log('tail:', myNewLinkedList.tail);

module.exports = DoublyLinkedList;