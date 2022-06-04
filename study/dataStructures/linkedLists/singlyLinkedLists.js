// A Singly linked list contains a set of nodes, and think of a node as blocks. This nodes have to elements, the values of the data you want to store and a pointer to the next node in line. The fist node es called the head and the last node is called the tail. Linked lists are we call null terminated, which signifies that it's the ends of the list.

// linked lists: apple --> grapes --> pears -->

// apples
// 8947 --> grapes
//          8742 --> pears
//                   372 --> null

//https://visualgo.net/en/list?slide=3

// prepend O(1) - Add into the beginning.
// append O(1) - Add at the end.
// lookup O(n) - finding for an item.
// insert O(n)
// delete O(n)

// A pointer is simply a reference.

// let obj1 = { a: null };
// let obj2 = obj1; // it is a pointer. I is nota a copy in memory both objects pointer to the same location in memory.

// obj1.a = 'Hi';

// console.log('1', obj1);
// console.log('2', obj2);

// 10 --> 5 --> 16

// let myLinkedList = {
//    head: {
//       value: 10,
//       next: {
//          value: 5,
//          next: {
//             value: 16,
//             next: null // because of null it is the tail
//          }
//       }
//    }
// }

class ListNode {
   constructor(value) {
      this.value = value,
         this.next = null
   }
}

class LinkedList {
   constructor(value) {
      this.head = new ListNode(value);
      this.tail = this.head;
      this.length = 1;
   }

   append(value) {
      const newNode = new ListNode(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
   }

   prepend(value) {
      const newNode = new ListNode(value);
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

   reverse() {
      if (this.length === 1)
         return this.printList();
      let currentNode = this.head;
      let reversedLinkedList = new LinkedList(currentNode.value);
      while (currentNode.next !== null) {
         currentNode = currentNode.next;
         reversedLinkedList.prepend(currentNode.value);
      }
      return reversedLinkedList.printList();
   }

   reverse2() {
      if (this.length === 1)
         return this.printList();
      let first = this.head;
      let second = this.head.next;
      this.tail = this.head;
      while (second) {
         const holdNode = second.next;
         second.next = first;
         first = second;
         second = holdNode;
      }
      this.head.next = null;
      this.head = first;
      return this.printList();
   }
};

const myNewLinkedList = new LinkedList(10);
myNewLinkedList.append(5);
myNewLinkedList.append(16);
myNewLinkedList.prepend(1);
console.log(myNewLinkedList.printList());
myNewLinkedList.insertByValue(10, 2);
myNewLinkedList.insertByValue(5, 3);
myNewLinkedList.insertByValue(250, 50);
myNewLinkedList.insertByValue(1, 99);
console.log(myNewLinkedList.insertByIndex(3, 123));
console.log(myNewLinkedList.insertByIndex(200, 140));
console.log('tail:', myNewLinkedList.tail);

myNewLinkedList.insertByValue(140, 141);
console.log('tail:', myNewLinkedList.tail);
console.log(myNewLinkedList.lookup(80));
console.log(myNewLinkedList.lookup(123));
console.log(myNewLinkedList.removeByIndex(3));
console.log(myNewLinkedList.removeByIndex(0));
console.log(myNewLinkedList.head);
console.log(myNewLinkedList.removeByValue(3));
console.log(myNewLinkedList.removeByValue(1));
console.log(myNewLinkedList.lookup(3));
console.log(myNewLinkedList.removeByValue(141));
console.log('tail:', myNewLinkedList.tail);
console.log(myNewLinkedList.removeByIndex(6));
//console.log('tail:', myNewLinkedList.tail);
console.log(myNewLinkedList.reverse())
console.log(myNewLinkedList.reverse2())

module.exports = LinkedList;
