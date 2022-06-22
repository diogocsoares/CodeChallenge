// @ts-nocheck


class ListNode {
   constructor(key, value) {
      this.value = value === undefined ? null : value;
      this.cacheIndex = key;
      this.previous = null;
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   addTop(key, value) {
      let node = new ListNode(key, value);
      if (this.head === null) {
         this.head = node;
         this.tail = node;
         this.length++;
         return node;
      } else {
         node.next = this.head;
         this.head.previous = node;
         this.head = node;
         this.length++;
         return node;
      }
   }

}

class LRUCache {
   constructor(capacity) {
      this.capacity = capacity;
      this.cacheIndex = {};
      this.usedCache = 0;
      this.linkedList = new LinkedList();
   }

   get(key) {
      let target = this.cacheIndex[key];
      if (!target)
         return -1;
      if (target.previous) {
         let parent = target.previous;
         let child = target.next;
         if (target.next)
            child.previous = parent;
         else
            this.linkedList.tail = parent;
         parent.next = child;
         this.linkedList.head.previous = target;
         target.previous = null;
         target.next = this.linkedList.head;
         this.linkedList.head = target;
      }
      return target.value;
   }

   put(key, value) {
      let refresh = this.get(key);
      let node;
      if (refresh != -1) {
         this.linkedList.head.value = value;
         return;
      }
      if (this.usedCache === 0 || this.capacity === 1) {
         this.cacheIndex[key] = this.linkedList.addTop(key, value);
         node = this.cacheIndex[key]; //Remove
         this.usedCache = 1;
         this.cacheIndex = {};
         return;
      } else if (this.usedCache === this.capacity) {
         //Evict the last one
         let parentEvict = this.linkedList.tail.previous;
         delete this.cacheIndex[this.linkedList.tail.cacheIndex];
         parentEvict.next = null;
         this.linkedList.tail = parentEvict;
         this.usedCache--;
         //Add
         this.linkedList.addTop(key, value);
         this.usedCache++;
         this.cacheIndex[key] = node;
         return;
      } else {
         this.linkedList.addTop(key, value);
         this.usedCache++;
         this.cacheIndex[key] = node;
      }
   }
   _add(key, node) {
      node.next = this.linkedList.head;
      this.linkedList.head.previous = node;
      this.linkedList.head = node;
      this.usedCache++;
      this.cacheIndex[key] = node;
   }
}

// ["LRUCache", "get", "put", "get", "put", "put", "get", "get"]
// [[2], [2], [2, 6], [1], [1, 5], [1, 2], [1], [2]]

// [null, -1, null, -1, null, null, 2, -1]

// [null, -1, null, -1, null, null, 2, 6]

const lruCache = new LRUCache(2);
//console.log(lruCache.get(2));
lruCache.put(2, 6);
console.log(lruCache.get(1));
lruCache.put(1, 5);
lruCache.put(1, 2);
console.log(lruCache.get(1));
console.log(lruCache.get(2));



