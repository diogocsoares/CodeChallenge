// @ts-nocheck


class CacheNode {
   constructor(key, value) {
      this.value = value;
      this.key = key;
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


class LRUCache {
   constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      this.linkedList = new LinkedList();
   }

   get(key) {
      if (!this.cache.has(key))
         return -1;
      return this.linkedList.insert(this.linkedList.remove(this.cache.get(key))).value;
   }

   put(key, value) {
      if (this.cache.has(key)) {
         this.linkedList.remove(this.cache.get(key));
      } else if (this.cache.size === this.capacity) {
         this.cache.delete(this.linkedList.remove(this.linkedList.head.next).key);
      }

      this.cache.set(key, new CacheNode(key, value));
      this.linkedList.insert(this.cache.get(key));
   }

}

const myLruCache = new LRUCache(3);
myLruCache.put(1, 1); //{1,1}
myLruCache.put(2, 2); //{2,1} {1,1}
myLruCache.put(3, 3); //{3,3} {1,1}
console.log(myLruCache.get(2)); // result = 1 //{1,1} {2,1}
myLruCache.put(4, 4); //{3,3} {4,4}
console.log(myLruCache.get(2)); //result = -1
console.log(myLruCache.get(1)); //result = -1
console.log(myLruCache.get(3)); //result = 3
console.log(myLruCache.get(4)); //result = 4



