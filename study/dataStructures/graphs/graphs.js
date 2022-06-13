//Graphs are one of the most useful and most used data structure in computer science when it comes to modeling real life. In short, a graph is simply a set of values tha are related in a pairwise fashion, it looks like a little network. There's connection to different nodes. In a graph, each item is called a node or a vertex. Nodes are then connected with edges. We can use graphs to represent maybe friendships, maybe family trees, networks, world wide web, roads one city to another and the roads that connect it.

//Types of graphs: 
// Directed: These type of graphs you can go in only one way. Twitter is a example, you can follow but they cannot follow you automatically.
// Undirected: These types of graphs are used for describing traffic flow. You can go in both directions. Facebook is a example, friendship is in both ways.
// Acyclic graph: There is now way to came back to an node.
// Cyclic: There is a way to came back to an node. We have edges connected in a circular fashion.
// Weighted: The edges (connections) have weighted.
// Unweighted: the edges don't have weight.

// DAG is a fancy word to named Directed Acyclic Graph.

//Tool to build complex graphs neo4j

//Edge list

/*
      2 ---0
     / \
    1   3
*/



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
]; //This way each index of the external and internal array define the node's value.

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

   addVertex(node) { // A vertex can be called node.
      //undirected graph
      if (this.numberOfNodes === 0) {
         this.adjacentList[0] = [];
         this.numberOfNodes++;
         return true;
      }
      let vertex = this.adjacentList[node];
      if (vertex) {
         return false;
      }
      else {
         this.adjacentList[node] = [];
         this.numberOfNodes++;
         return true;
      }
   }

   addVertexSimpleWay(node) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
   }

   addEdges(node1, node2) {
      //undirected graph
      if (this.numberOfNodes === 0)
         return false;
      let vertex1 = this.adjacentList[node1];
      let vertex2 = this.adjacentList[node2];
      let edge;
      if (vertex1) {
         for (edge of vertex1) {
            if (edge === node2)
               return false
         }
         vertex1.push(node2);
         vertex2.push(node1);
      } else {
         return false;
      }
   }

   addEdgesSimpleWay(node1, node2) {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
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

const myGraph = new Graph();

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

myGraph.addEdges('3', '1');
myGraph.addEdges('3', '4');
myGraph.addEdges('4', '2');
myGraph.addEdges('4', '5');
myGraph.addEdges('1', '2');
myGraph.addEdges('1', '0');
myGraph.addEdges('0', '2');
myGraph.addEdges('6', '5');
myGraph.addEdges('6', '5');
//myGraph.addEdgesSimpleWay('6', '5');

myGraph.showConnections();
