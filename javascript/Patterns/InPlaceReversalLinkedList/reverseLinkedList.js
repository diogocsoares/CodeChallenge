const LinkedList = require('../../study/dataStructures/linkedLists/singlyLinkedLists');

var reverseList = function (head) {
   if (!head)
      return null;
   let current = head;
   let previous = null;
   while (current) {
      const holdNode = current.next;
      current.next = previous;
      previous = current;
      current = holdNode;
   }
   head.next = null;
   head = previous;
   return head;
};

// let linkedList = new LinkedList([1, 2, 3, 4, 5]);
// console.log(reverseList(linkedList.head));


var reverseList2 = function (head) {
   let pre = null;

   while (head) {
      const next = head.next;
      head.next = pre;
      pre = head;
      head = next;
   }

   return pre;
}

let linkedList2 = new LinkedList([1, 2, 3, 4, 5]);
console.log(reverseList2(linkedList2.head));