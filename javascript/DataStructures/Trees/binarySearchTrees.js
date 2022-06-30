//They are grate to comparing things. This data structure preserves relationships.
//Rules: 1 - All child in the tree to the right of the root node must be grater than the current node. 2 - A node can only have up to two children because it's a binary tree.

//https://visualgo.net/en/bst

//Problem: Unbalance binary trees can be behavior like a linked list with time complexity O(n) in lookup, insert and delete operations.

// If you would like to learn more about these types of trees where the complexity comes from the auto-balancing of trees upon insertion, these are the resources that I recommend but keep in mind that they are not SUPER important for an interview. Just to scratch your curiosity :)

// AVL Trees:

// Animation https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
// How it Works https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7

// Red Black Trees:

// Animation https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
// How it Works https://www.cs.usfca.edu/~galles/visualization/RedBlack.html

// You can compare the technical details between the two here https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree


class TreeNode {
   constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   insert(value) {
      const node = new TreeNode(value);
      if (this.root === null) {
         this.root = node;
         return true;
      }
      let currentNode = this.root;
      while (currentNode) {
         if (value > currentNode.value) {
            if (!currentNode.right) {
               currentNode.right = node;
               return true;
            } else {
               currentNode = currentNode.right;
            }
         } else {
            if (!currentNode.left) {
               currentNode.left = node;
               return true;
            } else {
               currentNode = currentNode.left;
            }
         }
      }
      return false;
   }

   lookup(value) {
      if (!this.root)
         return false;
      let currentNode = this.root;
      while (currentNode) {
         if (currentNode.value === value)
            return currentNode;
         if (value > currentNode.value)
            currentNode = currentNode.right;
         else
            currentNode = currentNode.left;
      }
      return false;
   }

   remove(value) {
      if (!this.root) {
         return false;
      }
      let currentNode = this.root;
      let parentNode = null;

      while (currentNode) {
         if (value < currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.left;
         } else if (value > currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.right;
         } else if (currentNode.right === value) {

            //Option 1: No Right child:
            if (currentNode.right === null) {
               if (parentNode === null) {
                  this.root = currentNode.left;
               } else {
                  // if parent < current value, make left child a child of parent
                  if (currentNode.value < parentNode.value) {
                     parentNode.left = currentNode.left;

                     //if parent < current value, make left child a right child of parent
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = currentNode.lef;
                  }
               }
               //Option 2: Right child that has a left child
            } else if (currentNode.right.left === null) {
               if (parentNode == null) {
                  this.root = currentNode.left;
               } else {
                  currentNode.right.left = currentNode.left;

                  //If parent > current, make right child of the left the parent.
                  if (currentNode.value < parentNode.value) {
                     parentNode.left = currentNode.right;

                     //if parent < current, make right child a right child of the parent;
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = currentNode.right;
                  }
               }
               //Option 3: Right child that has a left child
            } else {
               //Find the right child's left most child.
               let leftMost = currentNode.Right.left;
               let leftMostParent = currentNode.right;
               while (leftMost.left !== null) {
                  leftMostParent = leftMost;
                  leftMost = leftMost.left;
               }

               //Parent's left subtree is now leftMost's right subtree.
               leftMostParent.left = leftMost.right;
               leftMost.left = currentNode.left;
               leftMost.right = currentNode.right;

               if (parentNode === null) {
                  this.root = leftMost;
               } else {
                  if (currentNode.value < parentNode.value) {
                     parentNode.left = leftMost;
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = leftMost;
                  }
               }
            }
            return true;
         }
      }
   }

   traverse(node) {
      const tree = { this: node.value };
      tree.left = node.left === null ? null : this.traverse(node.left);
      tree.right = node.right === null ? null : this.traverse(node.right);
      return tree;
   }

}


// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(160);
// tree.insert(166);
// tree.insert(145);
// tree.insert(13);
// tree.insert(15);
// tree.insert(1);
//tree.remove(170); //don't work can fix
//console.log(tree.lookup(4));


// const treeB = new BinarySearchTree();
// treeB.insert(9);
// treeB.insert(4);
// treeB.insert(6);
// treeB.insert(20);
// treeB.insert(13);
// treeB.insert(15);
// treeB.insert(1);

function levels(node) {
   let currentNode = node.root;
   let level = 0;
   while (currentNode) {
      if (currentNode.right) {
         currentNode = currentNode.right;
         level++;
      } else if (currentNode.left) {
         currentNode = currentNode.left;
         level++
      } else {
         return level;
      }
   }
   return level;
}

// console.log(levels(tree));

// function areSimilar(nodeA, nodeB) {
//    return levels(nodeA) === levels(nodeB)
// }

// console.log(areSimilar(tree, tree));
// console.log(JSON.stringify(traverse(tree.root)));

module.exports = BinarySearchTree;