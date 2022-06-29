// @ts-nocheck

/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000

*/

const BinaryTree = require('../../study/dataStructures/trees/trees');

var minDepth = function (root) {
   //Base Case
   if (!root)
      return 0;

   let left = minDepth(root.left);
   let right = minDepth(root.right);

   if (left > 0 && right > 0)
      return 1 + Math.min(left, right);

   return 1 + left + right;
};

const tree = new BinaryTree(3);
let holdNode;
tree.addLeft(tree.root, 9);
holdNode = tree.addRight(tree.root, 20);
tree.addLeft(holdNode, 15);
tree.addRight(holdNode, 7);

console.log(minDepth(tree.root));