
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class TreeNode {
   constructor(val, left, right) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
   }
}


var minDepth = function (root) {
   return root;
};

function createTree(array) {
   let tree = [];
   let point = 0;
   let left = 1;
   let right = 2;
   if (array[point] != null)
      tree.push(new TreeNode(array[point], array[left], array[right]));
   ++point;
   while (point < array.length) {
      if (array[point] != null) {
         if (point % 2 === 0) {
            left = array[point - 1] === null ? 1 : 3;
            right = array[point - 1] === null ? 2 : 4;
            tree.push(new TreeNode(array[point], array[point + left], array[point + right]));
         }
         else {
            left =  1;
            right = 2;      
            tree.push(new TreeNode(array[point], array[point + left + 1], array[point + right + 1]));
         }
         if (tree.length * 2 + 1 === array.length)
            point = array.length;
      }
      ++point;
   }
   console.log(tree);
   return tree;
}

createTree([3, 9, 20, null, null, 15, 7])
createTree([2, null, 3, null, 4, null, 5, null, 6])
createTree([2, 3, null, 4, null, 5, null, 6, null])

module.exports = { TreeNode, minDepth, createTree }