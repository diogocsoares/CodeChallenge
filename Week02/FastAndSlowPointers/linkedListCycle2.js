const LinkedList = require('../../study/dataStructures/linkedLists/singlyLinkedLists');

var detectCycle = function (head) {
   if (!head) return null;
   let hare = head;
   let tortoise = head;
   let catchNode;
   while (hare && hare.next != null) {
      hare = hare.next.next;
      tortoise = tortoise.next;
      if (tortoise === hare) {
         catchNode = head;
         while (catchNode != tortoise) {
            catchNode = catchNode.next;
            tortoise = tortoise.next
         }
         return tortoise;
      }
   }
   return null;
};

let linkedList = new LinkedList([1]);
// console.log(linkedList.addCycle(1));
console.log(detectCycle(linkedList.head));