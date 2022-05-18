//npm i --save-dev @types/jest

//const minDepth = require('./minimumDepthBinaryTree').minDepth
const createTree = require('./minimumDepthBinaryTree').createTree
const TreeNode = require('./minimumDepthBinaryTree').TreeNode


test('create a tree', () => {
   // let node1 = { val: 3, left: 9, right: 20 };
   // let node2 = { val: 9, left: null, right: null }
   // let node3 = { val: 20, left: 15, right: 7 }
   let node1 = new TreeNode(3, 9, 20);
   let node2 = new TreeNode(9, null, null);
   let node3 = new TreeNode(20, 15, 7)
   let tree = [node1, node2, node3]

   let node4 = new TreeNode(2, null, 3);
   let node5 = new TreeNode(3, null, 4);
   let node6 = new TreeNode(4, null, 5)
   let node7 = new TreeNode(5, null, 6)
   let tree2 = [node4, node5, node6, node7]

   let node8 = new TreeNode(2, 3, null);
   let node9 = new TreeNode(3, 4, null);
   let node10 = new TreeNode(4, 5, null)
   let node11 = new TreeNode(5, 6, null)
   let tree3 = [node8, node9, node10, node11]

   expect(createTree([3, 9, 20, null, null, 15, 7])).toMatchObject(tree);
   expect(createTree([2, null, 3, null, 4, null, 5, null, 6])).toMatchObject(tree2);
   expect(createTree([2, 3, null, 4, null, 5, null, 6, null])).toMatchObject(tree3);
}) 