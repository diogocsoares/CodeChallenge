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
      this.head = new CacheNode('head', value);
      this.tail = new CacheNode('tail', value);
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

class LFUCache {
   constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      this.countCache = new Map();
      this.countCache.set(1, new LinkedList(1));
      this.mapMinValue = new Map();
      this.minValue = new LinkedList(1);
      this.mapMinValue.set(1, this.minValue.insert(new CacheNode('C' + 1, 1)));
   }

   put(key, value) {
      if (this.capacity === 0)
         return;
      let node = this.cache.get(key);
      let count = 1;
      if (node) {
         this.countCache.get(node.count).remove(node);
         this._removeCountList(node.count);
         count += node.count;
      } else if (this.cache.size === this.capacity) {
         let minCount = this.minValue.head.next.value;
         let countList = this.countCache.get(minCount);
         let evictNode = countList.head.next;

         this.cache.delete(countList.remove(evictNode).key);
         this._removeCountList(minCount);
      }

      this.cache.set(key, new CacheNode(key, value, count));
      if (this.countCache.has(count))
         this.countCache.get(count).insert(this.cache.get(key));
      else {

         if (this.cache.get(key).count < this.minValue.head.next.value)
            this.mapMinValue.set(count, this.minValue.insertTop(new CacheNode('C' + count, count)));
         else
            this.mapMinValue.set(count, this.minValue.insert(new CacheNode('C' + count, count)));

         this.countCache.set(count, new LinkedList(count));
         this.countCache.get(count).insert(this.cache.get(key));
      }
   }

   get(key) {
      let currentNode = this.cache.get(key)
      if (!currentNode)
         return -1;

      this.cache.delete(this.countCache.get(currentNode.count).remove(currentNode));

      this._removeCountList(currentNode.count);

      currentNode.count++;
      if (this.countCache.has(currentNode.count)) {
         this.cache.set(key, new CacheNode(key, currentNode.value, currentNode.count));
         return this.countCache.get(currentNode.count).insert(this.cache.get(key)).value;
      }
      else {
         if (currentNode.count < this.minValue.head.next.value)
            this.mapMinValue.set(currentNode.count, this.minValue.insertTop(new CacheNode('C' + currentNode.count, currentNode.count)));
         else
            this.mapMinValue.set(currentNode.count, this.minValue.insert(new CacheNode('C' + currentNode.count, currentNode.count)));

         this.countCache.set(currentNode.count, new LinkedList(currentNode.count));
         this.countCache.get(currentNode.count).insert(currentNode);

         return currentNode.value;
      }
   }

   _removeCountList(count) {
      if (this.countCache.get(count).head.next === this.countCache.get(count).tail) {
         this.countCache.delete(count);
         this.mapMinValue.delete(this.minValue.remove(this.mapMinValue.get(count)).value);
      }
   }
}

// const myLruCache = new LRUCache(3));
// myLruCache.put(1, 1)); //{1,1}
// myLruCache.put(2, 2)); //{2,1} {1,1}
// myLruCache.put(3, 3)); //{3,3} {1,1}
// console.log(myLruCache.get(2))); // result = 1 //{1,1} {2,1}
// console.log(myLruCache.get(2))); // result = 1 //{1,1} {2,1}
// myLruCache.put(4, 4)); //{3,3} {4,4}
// console.log(myLruCache.get(2))); //result = -1
// console.log(myLruCache.get(1))); //result = -1
// console.log(myLruCache.get(3))); //result = 3
// console.log(myLruCache.get(4))); //result = 4


//Explanation
// cnt(x) = the use counter for key x
// cache=console.log(] will show the last used order for tiebreakers (leftmost element is  most recent)
var lfu = new LFUCache(10);

console.log(lfu.put(10, 13));
console.log(lfu.put(3, 17));
console.log(lfu.put(6, 11));
console.log(lfu.put(10, 5));
console.log(lfu.put(9, 10));
console.log(lfu.get(13));
console.log(lfu.put(2, 19));
console.log(lfu.get(2));
console.log(lfu.get(3));
console.log(lfu.put(5, 25));
console.log(lfu.get(8));
console.log(lfu.put(9, 22));
console.log(lfu.put(5, 5));
console.log(lfu.put(1, 30));
console.log(lfu.get(11));
console.log(lfu.put(9, 12));
console.log(lfu.get(7));
console.log(lfu.get(5));
console.log(lfu.get(8));
console.log(lfu.get(9));
console.log(lfu.put(4, 30));
console.log(lfu.put(9, 3));
console.log(lfu.get(9));
console.log(lfu.get(10));
console.log(lfu.get(10));
console.log(lfu.put(6, 14));
console.log(lfu.put(3, 1));
console.log(lfu.get(3));
console.log(lfu.put(10, 11));
console.log(lfu.get(8));
console.log(lfu.put(2, 14));
console.log(lfu.get(1));
console.log(lfu.get(5));
console.log(lfu.get(4)); //Remove 1 ok;
console.log(lfu.put(11, 4)); //Count 1
console.log(lfu.put(12, 24)); //Reach capacity //Count = 1
console.log(lfu.put(5, 18));
console.log(lfu.get(13));
console.log(lfu.put(7, 23)); //(11,4 ) Evict candidate (now count = 1)
console.log(lfu.get(8));
console.log(lfu.get(12));
console.log(lfu.put(3, 27));
console.log(lfu.put(2, 12));
console.log(lfu.get(5));
console.log(lfu.put(2, 9));
console.log(lfu.put(13, 4)); //(7,23) Evict candidate 
console.log(lfu.put(8, 18));
console.log(lfu.put(1, 7));
console.log(lfu.get(6));
console.log(lfu.put(9, 29)); // First to move count 6 to 7.
console.log(lfu.put(8, 21)); // ==== Problem ====
console.log(lfu.get(5));
console.log(lfu.put(6, 30));
console.log(lfu.put(1, 12));
console.log(lfu.get(10));
console.log(lfu.put(4, 15));
console.log(lfu.put(7, 22));
console.log(lfu.put(11, 26));
console.log(lfu.put(8, 17));
console.log(lfu.put(9, 29));
console.log(lfu.get(5));
console.log(lfu.put(3, 4));
console.log(lfu.put(11, 30));
console.log(lfu.get(12));
console.log(lfu.put(4, 29));
console.log(lfu.get(3));
console.log(lfu.get(9));
console.log(lfu.get(6));
console.log(lfu.put(3, 4));
console.log(lfu.get(1));
console.log(lfu.get(10));
console.log(lfu.put(3, 29));
console.log(lfu.put(10, 28));
console.log(lfu.put(1, 20));
console.log(lfu.put(11, 13));
console.log(lfu.get(3));
console.log(lfu.put(3, 12));
console.log(lfu.put(3, 8));
console.log(lfu.put(10, 9));
console.log(lfu.put(3, 26));
console.log(lfu.get(8));
console.log(lfu.get(7));
console.log(lfu.get(5));
console.log(lfu.put(13, 17));
console.log(lfu.put(2, 27));
console.log(lfu.put(11, 15));
console.log(lfu.get(12));
console.log(lfu.put(9, 19));
console.log(lfu.put(2, 15));
console.log(lfu.put(3, 16));
console.log(lfu.get(1));
console.log(lfu.put(12, 17));
console.log(lfu.put(9, 1));
console.log(lfu.put(6, 19));
console.log(lfu.get(4));
console.log(lfu.get(5));
console.log(lfu.get(5));
console.log(lfu.put(8, 1));
console.log(lfu.put(11, 7));
console.log(lfu.put(5, 2));
console.log(lfu.put(9, 28));
console.log(lfu.get(1));
console.log(lfu.put(2, 2));
console.log(lfu.put(7, 4));
console.log(lfu.put(4, 22));
console.log(lfu.put(7, 24));
console.log(lfu.put(9, 26));
console.log(lfu.put(13, 28));
console.log(lfu.get(11, 26));