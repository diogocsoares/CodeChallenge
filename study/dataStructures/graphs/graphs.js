//Graphs are one of the most useful and most used data structure in computer science when it comes to modeling real life. In short, a graph is simply a set of values tha are related in a pairwise fashion, it looks like a little network. There's connection to different nodes. In a graph, each item is called a node or a vertex. Nodes are then connected with edges. We can use graphs to represent maybe friendships, maybe family trees, networks, world wide web, roads one city to another and the roads that connect it.

//Types of graphs: 
// Directed: These type of graphs you can go in only one way. Twitter is a example, you can follow but they cannot follow you automatically.
// Undirected: These types of graphs are used for describing traffic flow. You can go in both directions. Facebook is a example, friendship is in both ways.
// Acyclic graph: There is now way to came back to an node.
//Cyclic: There is a way to came back to an node.
// Weighted: The edges have weighted.

/*
      2 ---0
     / \
    1   3
*/

//Edge list
const edgeGraph = [[0, 2], [2, 3], [2, 1], [1, 3]]; //The array have the connections. An edge list simply show us the connections./

//Adjacent list
const adjacentGraph = [[2], [2, 3], [0, 1, 3], [1, 2]]
const adjacentGraphObject =
   { 0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2] }

//The index is the node and the value is the nodes neighbors. We can use arrays, objects or linked lists. In this example the index of the main array represent the value. When you don't have a sequential number, can use an object in each position of the array. Maybe we can use hash tables or objects

//Adjacent Matrix
const adjacentMatrixGraph = [
   [0, 0, 1, 0],
   [0, 0, 1, 1],
   [1, 1, 0, 1],
   [0, 1, 1, 0]
];

const adjacentMatrixGraphObject = {
   0: [0, 0, 1, 0],
   1: [0, 0, 1, 1],
   2: [1, 1, 0, 1],
   3: [0, 1, 1, 0]
};

//This matrix is simply going to have zeros and ones indicating whether the node X has a connection to node Y. Zero means no one means yes. And if you have a weighted graph, you can actually add weights instead of on and zero. Maybe you can use object creating an hash table with key and value pair.

class Graph {
   constructor() {
      this.numberOfNodes = 0;
      this.adjacentList = {};
   }

   addVertex(node) {
      //undirected graph
   }

   addEdges(node1, node2) {
      //undirected graph
   }

   showConnections() {
      const allNodes = Object.keys(this.adjacentList);
      for (let node of allNodes) {
         let nodeConnections = this.adjacentList[node];
         let connections = "";
         let vertex;
         for (vertex of nodeConnections) {
            connections += vertex + " ";
         }
         console.log(node + "-->" + connections)
      }
   }
}



