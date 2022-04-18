/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
     return this;
}

var isPalindrome = function(head) {
    
};

/**
* @param {array} array
 */
function createLinkedList (array) {
    let head = {};
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        head = ListNode(array[i], array[i+1]);
    }
//    console.log(head);
    return head;
}

//let array = [1, 2, 3, 3, 2, 1];
//console.log(createLinkedList(array));


let a = ListNode(1 , 2);
console.log(a.val);
