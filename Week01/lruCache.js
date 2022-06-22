// @ts-nocheck
/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

   -  LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
   -  int get(int key) Return the value of the key if the key exists, otherwise return -1.
   -  void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
*/

/*
Example 1:

Input
   ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
   [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
   Output
   [null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
   LRUCache lRUCache = new LRUCache(2);
   lRUCache.put(1, 1); // cache is {1=1}
   lRUCache.put(2, 2); // cache is {1=1, 2=2}
   lRUCache.get(1);    // return 1
   lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
   lRUCache.get(2);    // returns -1 (not found)
   lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
   lRUCache.get(1);    // return -1 (not found)
   lRUCache.get(3);    // return 3
   lRUCache.get(4);    // return 4
*/

/*
Constraints:

   1 <= capacity <= 3000
   0 <= key <= 104
   0 <= value <= 105
   At most 2 * 105 calls will be made to get and put.

  The functions get and put must each run in O(1) average time complexity.
*/

//Approach: 

// 1 - As key represents the position we can use an array to support get operations with o(1) time complexity. Each array position will point to an object store in a linked list. A singly linked list have head and tail property it will support evict operation and add to the top with out lost references to other objects. This operation have o(1) time complexity.
// Trade of 01 -- in our case the tail will be the evict candidate it means the last but one. (don't work because we don't have de information about the previous node)
// Trade of 02 -- Convert the type of singly linked list to doubly to allow throw in both ways.
// Trade of 03 -- We need to store the index in the cache to redefine the pointer before evict.


class ListNode {
   constructor(key, value) {
      this.value = value === undefined ? null : value;
      this.cacheIndex = key;
      this.previous = null;
      this.next = null;
   }
}

class LRUCache {
   constructor(capacity) {
      this.capacity = capacity;
      this.cacheIndex = {};
      this.usedCache = 0;
      this.linkedList = {
         head: null,
         tail: null
      }
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
      if (refresh != -1) {
         this.linkedList.head.value = value;
         return;
      }
      let node = new ListNode(key, value)
      if (this.usedCache === 0 || this.capacity === 1) {
         this.linkedList.head = node;
         this.linkedList.tail = node;
         this.usedCache = 1;
         this.cacheIndex = {};
         this.cacheIndex[key] = node;
         return;
      } else if (this.usedCache === this.capacity) {
         //Evict the last one
         let parentEvict = this.linkedList.tail.previous;
         delete this.cacheIndex[this.linkedList.tail.cacheIndex];
         parentEvict.next = null;
         this.linkedList.tail = parentEvict;
         this.usedCache--;
         //Add
         this._add(key, node);
         return;
      } else {
         this._add(key, node);
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
console.log(lruCache.get(2));
lruCache.put(2, 6);
console.log(lruCache.get(1));
lruCache.put(1, 5);
lruCache.put(1, 2);
console.log(lruCache.get(1));
console.log(lruCache.get(2));



