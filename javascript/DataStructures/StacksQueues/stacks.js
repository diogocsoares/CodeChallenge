// Stacks and queues are very similar, both are linear data structures. Allow us traverse data sequentially one by one. In which only one data element can be directly reached. Both types are similar but the main difference is only how items get removed from this data structure. There is no random access operation, we can only run commands like push, peak, pop, all which deal exclusively with the element at the beginning or the end of the data structure.

//Stacks - We can think of them as plates stacked on top of each other vertically and you can only touch the top plate. The way we can access data from a stack is to grab the first plate, then the second, then the third,  and keep going until we've gone through all stack. And this is called LIFO, or last in, first out.

//Methods: pop O(1) - Remove the last item, push O(1) - is add a plate, peek O(1) - view the top most plate, lookup O(n) just to show O(n) because usually don't want to traverse through the entire stack.

class StackNode {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
   }

   peek() {
      return this.top?.value === undefined ? null : this.top?.value;
   }

   push(value) {
      const node = new StackNode(value);
      if (this.isEmpty()) {
         this.top = node;
         this.bottom = node;
      } else {
         const holdingPointer = this.top;
         this.top = node;
         this.top.next = holdingPointer;
      }
      this.length++
      return this;
   }

   pop() {
      if (!this.isEmpty()) {
         this.top = this.top.next;
         this.length--;
         if (this.length === 0)
            this.bottom = null;
      }

      return this;
   }

   isEmpty() {
      return this.top === null;
   }
}

class StackArray {
   constructor() {
      this.array = [];
   }

   peek() {
      return this.array[this.array.length - 1];
   }

   push(value) {
      this.array.push(value)
      return this;
   }

   pop() {
      if (this.array.length === 0)
         return null;
      this.array.pop();
      return this;
   }
}

// const myStack = new Stack();
// myStack.push('google.com');
// myStack.push('jw.com');
// console.log(myStack.push('discord.com'));
// console.log(myStack.peek(), myStack.length);
// myStack.pop();
// console.log(myStack.peek(), myStack.length);
// myStack.pop();
// console.log(myStack.peek(), myStack.length);
// myStack.pop();
// console.log(myStack.peek(), myStack.length);
// console.log(myStack);


const myStackArray = new StackArray();
myStackArray.push('google.com');
myStackArray.push('jw.com');
console.log(myStackArray.push('discord.com'));
console.log(myStackArray.peek(), myStackArray.array.length);
myStackArray.pop();
console.log(myStackArray.peek(), myStackArray.array.length);
myStackArray.pop();
console.log(myStackArray.peek(), myStackArray.array.length);
myStackArray.pop();
console.log(myStackArray.peek(), myStackArray.array.length);
console.log(myStackArray);