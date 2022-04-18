let array = [1, 2, 2, 1];

let node = {
   val: null,
   next: null
};

let point = node;

function createList() {
   for (let i = 0; i < array.length; i++) {
      point.val = array[i];
      point.next = {
         val: array[i + 1],
         next: null
      }
      point = point.next;
   }
}

function printList(node) {
   point = node.next;
   console.log(node.val);
   console.log(node.next);
   while (point.next != null) {
      console.log(point.val);
      console.log(point.next);
      point = point.next;
   }
}

function isPalindrome(head) {
   let point = head.next;
   let arrayA = [head.val];
   while (point.next != null) {
      arrayA.push(point.val);
      point = point.next;
   }
   let middle = Math.floor(arrayA.length / 2);
   let arrayB = arrayA.slice(middle);
   let testPalindrome = 0;
   for (let i = 0; i < arrayB.length; i++) {
      if (arrayB[i] === arrayA[arrayB.length - 1 - i]) {
         testPalindrome++;
      }
   }
   return (testPalindrome === arrayB.length);
}


createList();
//printList(node);

console.log(isPalindrome(node));
