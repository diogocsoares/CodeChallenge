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

// A pointer is imply a reference.

// let obj1 = { a: null };
// let obj2 = obj1; // it is a pointer. I is nota a copy in memory both objects point to the same location in memory.

// obj1.a = 'Hi';

// console.log('1', obj1);
// console.log('2', obj2);

// 10 --> 5 --> 16

let myLinkedList = {
   head: {
      value: 10,
      next: {
         value: 5,
         next: {
            value: 16,
            next: null // because of null it is the tail
         }
      }
   }
}

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

   insertByValue(value, key) {
      let point = this.head;
      do {
         if (point.value === key) {
            const newNode = new ListNode(value);
            newNode.next = point.next;
            point.next = newNode;
            this.length++
            return point;
         }
         point = point.next;
      } while (point.next !== null)
      return false;
   }

   lookup(key) {
      let point = this.head;
      do {
         if (point.value === key) {
            return point;
         }
         point = point.next;
      } while (point.next !== null)
      return false;
   }

   delete(key) {
      let point = this.head;
      let previous = this.head;
      do {
         if (point.value === key) {
            if (point === previous) {
               this.head = point.next;
               return point;
            } else {
               previous = point.next;
               point = previous;
               return point;
            }
         }
         previous = point;
         point = point.next;
      } while (point.next !== null)
      return false;
   }

   insert(index, value) {
      if (index >= this.length)
         return this.append(value);
      const newNode = new ListNode(value);
      let point
   }

   printList() {
      const array = [this.head.value];
      let point = this.head;
      while (point.next !== null) {
         point = point.next;
         array.push(point.value);
      }
      return array;
   }
};

const myNewLinkedList = new LinkedList(10);
myNewLinkedList.append(5);
myNewLinkedList.append(16);
myNewLinkedList.prepend(1);
myNewLinkedList.insertByValue(2, 10);
myNewLinkedList.insertByValue(3, 5);
myNewLinkedList.insertByValue(99, 1);
console.log(myNewLinkedList.printList());
// console.log(myNewLinkedList);
// console.log(myNewLinkedList.lookup(3));
// //myNewLinkedList.delete(3);
// console.log(myNewLinkedList.printList())
// console.log(myNewLinkedList.lookup(3));