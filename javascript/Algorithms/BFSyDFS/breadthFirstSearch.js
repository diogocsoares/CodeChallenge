//BFS - Breadth First Search/Traversal
//The way Breath First Search works is that you start with the root node and move left to right across the second level. An then move left to right across the third level and so on and so forth. You just keep going from left to right, level by level, and keep going until you find the node you're looking for or the tree ends.

//Breath first search uses additional memory because it is necessary to track the child node of all the nodes on a given level while searching that level. This means that we need to track every node and its children in order. 

//If you know a solution is not far from the root of the tree:
//BFS - Because it starts searching the closest nodes to the parent first.

//If the tree is very deep and solution are rare:
//BFS - The reason over something like DFS is that DFS will take a really long time with this type of tree, because the tree is really deep, and because solution is rare, it's most likely going just repeat that step over and over. DFS we use recursive function and with deep research tha can take really long time. Although with BFS we also have memory concerns.

//Finding the shortest path:
//BFS - That is what breadth first search is built for.

//       9
//    4     20
//  1  6  15  170

// BFS Order --> [9, 4, 20, 1, 6, 15, 170]

const BinarySearchTree = require('../../dataStructures/trees/binarySearchTrees');
const Queue = require('../../dataStructures/stacksQueues/queues');

class DepthFirstSearchTree extends BinarySearchTree {
   bfsUsingArray() {
      let currentNode = this.root;
      let list = [];
      let queueArray = [];
      queueArray.push(currentNode);
      while (queueArray.length > 0) {
         currentNode = queueArray.shift(); //We take the very first item in the queue (O(n) time complexity using array);
         list.push(currentNode.value);
         if (currentNode.left)
            queueArray.push(currentNode.left);
         if (currentNode.right)
            queueArray.push(currentNode.right);
      }
      return list;
   }

   bfsUsingQueue() {
      let currentNode = this.root;
      let list = [];
      let queue = new Queue();
      queue.enqueue(currentNode);
      while (queue.length > 0) {
         currentNode = queue.dequeue(); //We take the very first item in the queue (O(1) time complexity using queue);
         list.push(currentNode.value);
         if (currentNode.left)
            queue.enqueue(currentNode.left);
         if (currentNode.right)
            queue.enqueue(currentNode.right);
      }
      return list;
   }

   bfsRecursive(queue, list) {
      if (queue.length === 0)
         return list;

      let currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left)
         queue.push(currentNode.left);
      if (currentNode.right)
         queue.push(currentNode.right);

      return this.bfsRecursive(queue, list);

   }
}

let myTreeBFS = new DepthFirstSearchTree();
myTreeBFS.insert(9);
myTreeBFS.insert(4);
myTreeBFS.insert(170);
myTreeBFS.insert(6);
myTreeBFS.insert(20);
myTreeBFS.insert(15);
myTreeBFS.insert(1);
console.log(myTreeBFS.bfsUsingArray());
console.log(myTreeBFS.bfsUsingQueue());
console.log(myTreeBFS.bfsRecursive([myTreeBFS.root], []));
