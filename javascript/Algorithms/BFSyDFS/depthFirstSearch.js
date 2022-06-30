//DFS - Depth First Search/Traversal: Unlike breadth first search, is a little bit different. The search follows one branch of the tree down as many levels as possible until the target notice found or the end is reached. When the search can go on any further, it continues at the nearest ancestor with an unexplored child.

//Depth first search has a lower memory requirement than breadth first search, because it's not necessary, to store all the child pointers at each level, something that we'll see when we actually coded. The idea with depth first search is that we want to go as deep as possible into graph, usually starting from the left side, and then start going to the right until the traversal of the tree is done. As a name suggests, we go depth first. That is deep first versus breadth.

//If the tree is very wide:
//DFS - Because in a BFS it is gonna need too much memory. The way breath first search works is that it has to keep track of the nodes in the current level an something called a queue. So because of that, it might take up too much memory.

//If solution are frequent but located deep in the tree:
//DFS - So hopefully we'll be able to find an answer quicker than Breath first search.

//Determine whether a path exists between two nodes:
//DFS - That is what depth first search is built for. 


//       9
//    4     20
//  1  6  15  170
//InOrder - [1, 4, 6, 9, 15, 20, 170] Every thing in order.
//PreOrder - [9, 4, 1, 6, 20, 15, 170] Is really useful if you want to recreate the tree.
//PostOrder - [1, 6, 4, 15, 170, 20, 9] Child appear before their parents.

//DFS Order --> [9, 4, 1, 6, 20, 15, 170]

//       101
//  33        105

//in order - 33, 101, 105
//pre order - 101, 33, 105
//post order - 33, 105, 101

//We're using a stack data structure with the recursion. Each of these functions are added to our call stack and we'll start to return as they reach the end. It's shows the space complexity of death first search, the amount of space that we need in terms of memory, unlike breath first search which uses the queue. The height of the tree will tell us how much memory we'll need, because the height of the tree will match the deepest recursive function and that's what's going to be added to the stack as memory. So our memory consumption is of height of the tree. Which will give us the worst case scenario.

const BinarySearchTree = require('../../dataStructures/trees/binarySearchTrees');

class DepthFirstSearchTree extends BinarySearchTree {
   DFSInOrder() {
      return this.traverseInOrder(this.root, []);
   }
   DFSPostOrder() {
      return this.traversePostOrder(this.root, []);

   }
   DFSPreOrder() {
      return this.traversePreOrder(this.root, []);
   }

   traverseInOrder(node, list) {
      if (node.left)
         this.traverseInOrder(node.left, list);
      list.push(node.value);
      if (node.right)
         this.traverseInOrder(node.right, list);
      return list;
   }

   traversePreOrder(node, list) {
      list.push(node.value);
      if (node.left)
         this.traversePreOrder(node.left, list);
      if (node.right)
         this.traversePreOrder(node.right, list);
      return list;
   }

   traversePostOrder(node, list) {
      if (node.left)
         this.traversePostOrder(node.left, list);
      if (node.right)
         this.traversePostOrder(node.right, list);
      list.push(node.value);
      return list;
   }
}

let myTreeDFS = new DepthFirstSearchTree();
myTreeDFS.insert(9);
myTreeDFS.insert(4);
myTreeDFS.insert(6);
myTreeDFS.insert(20);
myTreeDFS.insert(170);
myTreeDFS.insert(15);
myTreeDFS.insert(1);

console.log(myTreeDFS.DFSInOrder());
console.log(myTreeDFS.DFSPreOrder());
console.log(myTreeDFS.DFSPostOrder());