// @ts-nocheck
class CacheNode {
   constructor(key, value) {
      this.value = value;
      this.cacheIndex = key;
      this.prev = null;
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this.head = new CacheNode('h', 'head');
      this.tail = new CacheNode('t', 'tail');
      this.head.next = this.tail;
      this.tail.prev = this.head;
   }

   remove(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      return node;
   }

   insert(node) {
      node.prev = this.tail.prev;
      node.next = this.tail;
      this.tail.prev.next = node;
      this.tail.prev = node;
      return node;
   }
}

var list = new LinkedList();
var node1 = new CacheNode(1, 1);
var node2 = new CacheNode(2, 2);
var node3 = new CacheNode(3, 3);
list.insert(node1);
list.insert(node2);
list.insert(node3);
list.remove(node2);
list.remove(node1);
list.remove(node3);