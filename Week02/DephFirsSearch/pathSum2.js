/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: []

Example 3:
Input: root = [1,2], targetSum = 0
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
*/
const BinaryTree = require('../../study/dataStructures/trees/trees');

var pathSum = function (root, targetSum) {
   return pathSumAux(root, targetSum, true);
};

var pathSumAux = function (root, targetSum, isInitialRoot) {
   //Base Case
   if (!root)
      return [];

   let value = root.val;
   let allViableAnswer = [];

   let leftSubTree = pathSumAux(root.left, targetSum - value, false);
   let rightSubTree = pathSumAux(root.right, targetSum - value, false);

   //Three options:
   //append root to every left subtree answer
   //append root to every right subtree answer
   //if root value === target sum return path
   for (let i = 0; i < leftSubTree.length; i++) {
      leftSubTree[i].push(value);
      allViableAnswer.push(leftSubTree[i]);
   }
   for (let i = 0; i < rightSubTree.length; i++) {
      rightSubTree[i].push(value);
      allViableAnswer.push(rightSubTree[i]);
   }

   //special case
   if (value === targetSum && !root.left && !root.right)
      allViableAnswer.push([value]);

   if (isInitialRoot) {
      for (let i = 0; i < allViableAnswer.length; i++)
         allViableAnswer[i].reverse();
   }

   return allViableAnswer;
};

const sumTree = new BinaryTree(5);
let holdNode;
holdNode = sumTree.addLeft(sumTree.root, 4);
holdNode = sumTree.addLeft(holdNode, 11);
sumTree.addLeft(holdNode, 7);
sumTree.addRight(holdNode, 2);

holdNode = sumTree.addRight(sumTree.root, 8);
sumTree.addLeft(holdNode, 13);
holdNode = sumTree.addRight(holdNode, 4);
sumTree.addLeft(holdNode, 5);
sumTree.addRight(holdNode, 1);

console.log(pathSum(sumTree.root, 22));

//console.log(sumTree.traverse(sumTree.root.right));