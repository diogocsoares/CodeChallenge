// @ts-nocheck
/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/

const BinaryTree = require('../../study/dataStructures/trees/trees');

class QueueNode {
   constructor(value) {
      this.val = value;
      this.next = null;
   }
}

class MyQueue {
   constructor(value) {
      this.first = null;
      this.last = null;
      this.length = 0;
      if (value)
         this.enqueue(value);
   }

   enqueue(value) {
      if (!value)
         return;
      const node = new QueueNode(value);
      if (this.length === 0) {
         this.first = node;
         this.last = node;
      } else {
         this.last.next = node;
         this.last = node;
      }
      this.length++;
      return this.last.val;
   }

   dequeue() {
      const node = this.first;
      if (!node)
         return null;
      if (node === this.last)
         this.last = null;
      this.first = this.first.next;
      this.length--;
      return node.val;
   }

   peek() {
      return this.length > 0 ? this.first.val : null;
   }
}

var levelOrder = function (root) {
   if (!root)
      return [];
   let allLevels = [];
   let queue = new MyQueue(root);
   while (queue.length > 0) {
      let temp = [];
      let queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
         let currentNode = queue.dequeue();
         temp.push(currentNode.val);
         queue.enqueue(currentNode.left);
         queue.enqueue(currentNode.right);
      }
      allLevels.push(temp);
   }
   return allLevels;
};

let tree = new BinaryTree(3);
let holdNode;
tree.addLeft(tree.root, 9);
holdNode = tree.addRight(tree.root, 20);
tree.addLeft(holdNode, 15);
tree.addRight(holdNode, 7);
//console.log(tree.traverse(tree.root));

//console.log(levelOrder(tree.root));


var levelOrderRecursive = function (root) {
   let result = [];

   const traversal = (root, level = 0) => {
      if (!root)
         return;

      if (!result[level])
         result.push([root.val]);
      else
         result[level].push(root.val);

      traversal(root.left, level + 1);
      traversal(root.right, level + 1);
   }

   traversal(root);
   return result;
};



console.log(levelOrderRecursive(tree.root));
