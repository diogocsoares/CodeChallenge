// Trees are a data structure that have what we call a hierarchical structure, as opposed to something like linked lists or arrays, which are linear. Trees can have zero or more child nodes. A tree usually starts with a single root node or a parent node, and every child of the tree descends form this root node. So it's kind of like a inverse tree. Every child of a node descends from only one parent. So we have a parent child relationship that you see is unidirectional, that is, it's gone one way, and you also have leaf nodes, which are the very end of a tree data structure. Finally within a tree, we can have things like sub trees.

//Abstract syntax tree is how programs or code is usually being run. Usually we write code and then its gets broken down by the machine into this abstract syntax tree so that it understands what we wrote down. This uses a tree data structure.

// Rules: 1 - Each node can only have either zero, one or two nodes. 2 - Each child can only have one parent. 3 - Each node represents a certain state.

//Example:
function BinaryTreeNodeExample(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

//Perfect Binary Tree: has everything filled in that means all the leaf nodes are full and there's node that only has one child. The bottom layer of the tree is completely filled. It is important because this type of binary tree is really efficient. This type has two special properties: 1 - The number of total nodes on each level doubles as we move down the tree. 2 - The number of nodes on the last level is equal to the sum of the number of nodes on all the other level plus one.
//Time complexity: Lookup O(log N), insert O(log N), delete O(log N).

//Examples: 
//Level 0: 2ˆ0 = 1;
//Level 1: 2ˆ1 = 2;
//Level 2: 2ˆ2 = 4;
//Level 3: 2ˆ3 = 8;

// # of nodes = 2ˆh - 1 (h is height or levels, steps).
// simplifying log nodes = height > log 100 = 2 because 10ˆ2 = 100
// Log is simply means that based on the height, the maximum number od decisions it's going to be log N. One decision for each level or step. In a tree with 3 levels we have 3 decision to make in a worst case.

//Full Binary Tree: Which simply says that a node has either a zero or two children, but never one child.


class TreeNode {
   constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
   }
}

class BinaryTree {
   constructor(value) {
      this.root = new TreeNode(value);
      this.items = [];
   }

   addLeft(parent, value) {
      parent.left = new TreeNode(value);
      return parent.left;
   }

   addRight(parent, value) {
      parent.right = new TreeNode(value);
      return parent.right;
   }

   traverse(node) {
      if (!node)
         node = this.root;
      const tree = { this: node.val };
      tree.left = node.left === null ? null : this.traverse(node.left);
      tree.right = node.right === null ? null : this.traverse(node.right);
      return tree;
   }

   convertTree(node) {
      if (!node)
         node = this.root;
      this.items = [];
      let queue = [node];
      let missingElements = 0;
      while (queue.length > 0) {
         let currentNode = queue.shift();
         if (currentNode != null) {
            for (let i = 1; i <= missingElements; i++)
               this.items.push(null);
            missingElements = 0;
            this.items.push(currentNode.val);
            queue.push(currentNode.left);
            queue.push(currentNode.right);
         } else
            missingElements++;
      }
      return this.items;
   }

}

module.exports = BinaryTree;