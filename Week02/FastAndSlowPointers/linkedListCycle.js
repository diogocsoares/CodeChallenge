const LinkedList = require('../../study/dataStructures/linkedLists/singlyLinkedLists');

var hasCycle = function (head) {
   if (!head) return false;
   let hare = head;
   let tortoise = head;
   while (hare && hare.next != null) {
      hare = hare.next.next;
      tortoise = tortoise.next;
      if (hare === tortoise)
         return true;
   }
   return false;
};


let linkedList = new LinkedList([3, 2, 0, -4]);
console.log(hasCycle(linkedList.head));
console.log(linkedList.addCycle(1));
console.log(hasCycle(linkedList.head));


//console.log(linkedList.printList());