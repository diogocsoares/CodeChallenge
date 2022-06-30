// Arrays witch are some times called list, organizes items sequentially, that means one after another in memory. 
// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)

const strings = ['a', 'b', 'c', 'd'];
//memory usage 4*4 = 16 bytes of storage.

strings[2]; //to be 'c'

//push adds an item at the end of the array. O(1)
strings.push('e');

//pop remove the last item from the array. O(1)
strings.pop();

//unshift add an item at the beginning of the array. Will shift all the index. O(n) 
strings.unshift('x');

//splice add items at the middle of the array. will shift all items before the index O(n) 
strings.splice(2, 0, 'alien');

//In Javascript all arrays are dynamic

class MyArray {
   constructor() {
      this.length = 0;
      this.data = {};
   }

   get(index) {
      return this.data[index];
   }

   push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
   }

   pop() {
      const item = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return item;
   }

   delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
   }

   shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
         this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
   }
}
// const myArray = new MyArray();
// myArray.push('hi');
// myArray.push('you');
// myArray.push('!');
// myArray.push('Diogo');
// myArray.delete(1);
// console.log(myArray);
// console.log(myArray);