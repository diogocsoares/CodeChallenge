//Hash Tables = Hash Maps, Maps, Unordered Maps, Dictionaries, Objects...
// Have the key -> Value pair.
//Hash function is simply a function tha generates a value of fixed length for each input that it gets. Examples: md5, sha1, sha256. 
//Idempotent: A fancy way of saying that a function, given an input, always outputs the same output, and underneath the hood, because hash tables exists in all languages, they're implemented with an optimum hashing function that's really, really fast, with time complexity of O(1).

//Time Complexity: Insert -> O(1); lookup -> O(1); delete -> O(1); search -> O(1).

// ----- Objects -----
let user = {
   age: 54,
   name: 'kylie',
   magic: true,
   scream: function () {
      console.log('ahhhhhhh!')
   }
}

user.scream();
user.spell = 'abra kadabra'; //O(1)
console.log(user.age, user.spell); //O(1)

//Hash Collisions = https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
// When a collision happens our time complexity is O(n/k) where K is the size for our hash table. Removing constants it's became O(n).

// ----- Map -----
// Using maps you can have any type of object including functions as a key. Another benefit of map is that it maintains insertion order.
const a = new Map();

// ----- Sts -----
//Is another feature very similar to Map, the only difference is that it only stores the keys.
const b = new Set();

class HashTable {
   constructor(size) {
      this.data = new Array(size);
   }

   _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
         hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
   }

   set(key, value) {
      let point = this._hash(key);
      if (!this.data[point]) {
         this.data[point] = [];
         this.data[point].push([key, value]);
      }
      else
         this.data[point].push([key, value]); //Collision
      console.log(this.data);
      return true;
   }

   get(key) {
      const pointData = this.data[this._hash(key)];
      for (let i = 0; i < pointData.length; i++) { //Collision
         if (pointData[i][0] === key)
            return pointData[i][1];
      } //O(1) for most of cases but O(n) in case of collision. 
      return undefined;
   }

   keys() {
      const keysArray = []
      for (let i = 0; i < this.data.length; i++) {
         if (this.data[i]) {
            for (let j = 0; j < this.data[i].length; j++)
               keysArray.push(this.data[i][j][0]);
         }
      } //O(n) with no order.
      return keysArray;
   }

}

const myHashTable = new HashTable(10);
myHashTable.set('grapes', 1000);
myHashTable.set('chuchu', 100);
myHashTable.set('apple', 330);
myHashTable.set('orange', 54);
console.log(myHashTable.get('apple'));
console.log(myHashTable.keys());
