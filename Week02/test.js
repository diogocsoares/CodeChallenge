// @ts-nocheck
class CacheNode {
   constructor(key, value, count) {
      this.value = value;
      this.count = count ? count : 1;
      this.key = key;
      this.prev = null;
      this.next = null;
   }
}

class LinkedList {
   constructor(value) {
      this.head = new CacheNode('head', 'head');
      this.tail = new CacheNode('tail', 'tail');
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

   insertTop(node) {
      this.head.next.prev = node;
      let holdNode = this.head.next;
      this.head.next = node;
      node.prev = this.head;
      node.next = holdNode;
      return node;
   }
}

var list = new LinkedList();
var node4 = new CacheNode(4, 4);
var node1 = new CacheNode(1, 1);
var node2 = new CacheNode(2, 2);
var node3 = new CacheNode(3, 3);
list.insert(node1);
list.insert(node2);
list.insert(node3);
list.insertTop(node4);
list.remove(node1);
list.remove(node4);

