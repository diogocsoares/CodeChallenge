class ListNode {
   constructor(value) {
      this.value = value,
         this.next = null,
         this.prev = null
   }
}

class DoublyLinkedList {
   constructor(value) {
      this.head = new ListNode(value);
      this.tail = this.head;
      this.length = 1;
   }

   append(value) {
      const newNode = new ListNode(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
   }

   prepend(value) {
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
      let currentNode = this.head;
      let previousNode = this.head;
      while (currentNode.next !== null) {
         if (currentNode.value === key) {
            if (currentNode === previousNode) {
               this.head = currentNode.next;
               this.length--;
               return this.printList();
            } else {
               previousNode.next = currentNode.next;
               this.length--;
               return this.printList();
            }
         }
         previousNode = currentNode;
         currentNode = currentNode.next;
      }
      if (currentNode.next === null && currentNode.value === key) {
         previousNode.next = null;
         this.tail = previousNode;
         this.length--;
         return this.printList();
      }
      return false;
   }

   removeByIndex(index) {
      if (index > this.length - 1)
         return false;
      if (index === 0) {
         const newHeadNode = this.head.next;
         this.head = newHeadNode;
         this.length--;
         return this.printList();
      }
      const previousNode = this.traverseToIndex(index - 1);
      const currentNode = previousNode.next;
      previousNode.next = currentNode.next;
      if (previousNode.next === null)
         this.tail = previousNode;
      this.length--;
      return this.printList();
   }

   insertByIndex(index, value) {
      if (index >= this.length) {
         this.append(value);
         return this.printList();
      }
      if (index === 0) {
         this.prepend(value);
         return this.printList();
      }
      const newNode = new ListNode(value);
      const currentNode = this.traverseToIndex(index);
      const holdingPointer = currentNode.next;
      currentNode.next = newNode;
      newNode.next = holdingPointer;
      this.length++
      return this.printList();
   }

   insertByValue(key, value) {
      let currentNode = this.traverseToKey(key);
      if (currentNode) {
         if (currentNode.next === null) {
            this.append(value);
            return this.printList();
         }
         const newNode = new ListNode(value);
         newNode.next = currentNode.next;
         currentNode.next = newNode;
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
         if (currentNode.value === key)
            return currentNode;
         currentNode = currentNode.next;
      }
      return false;
   }

   printList() {
      const array = [this.head.value];
      let currentNode = this.head;
      while (currentNode.next !== null) {
         currentNode = currentNode.next;
         array.push(currentNode.value);
      }
      return array;
   }
};

const myNewLinkedList = new DoublyLinkedList(10);
myNewLinkedList.append(5);


// myNewLinkedList.append(16);
console.log(myNewLinkedList.prepend(1));
console.log(myNewLinkedList.printList());
// myNewLinkedList.insertByValue(10, 2);
// myNewLinkedList.insertByValue(5, 3);
// myNewLinkedList.insertByValue(250, 50);
// myNewLinkedList.insertByValue(1, 99);
// console.log(myNewLinkedList.insertByIndex(3, 123));
// console.log(myNewLinkedList.insertByIndex(200, 140));
// console.log('tail:', myNewLinkedList.tail);

// myNewLinkedList.insertByValue(140, 141);
// console.log('tail:', myNewLinkedList.tail);
// console.log(myNewLinkedList.lookup(80));
// console.log(myNewLinkedList.lookup(123));
// console.log(myNewLinkedList.removeByIndex(3));
// console.log(myNewLinkedList.removeByIndex(0));
// console.log(myNewLinkedList.head);
// console.log(myNewLinkedList.removeByValue(3));
// console.log(myNewLinkedList.removeByValue(1));
// console.log(myNewLinkedList.lookup(3));
// console.log(myNewLinkedList.removeByValue(141));
// console.log('tail:', myNewLinkedList.tail);
// console.log(myNewLinkedList.removeByIndex(6));
// console.log('tail:', myNewLinkedList.tail);
