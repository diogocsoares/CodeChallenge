//Queues - The best way to think about them is like an entrance to a roller coaster. The first person that arrives in line to go first on the rollercoaster and them the second person gets to go, and them the third person gets to go until the last one gets to go. So it's the opposite of Stacks. This is called FIFO, we access first in, first out.

//Methods: enqueue O(1) - add persons on line, dequeue O(1) - which you can think as a pop, which remove person from line but don't take the last person in line, take the first person, peek O(1) - which tel us what's the first person (item) that's going to come up. Lookup you usually don't do.

//https://leetcode.com/problems/implement-queue-using-stacks/solution/

class QueueNode {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Queue {
   constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
   }

   peek() {
      return this.first.value;
   }

   enqueue(value) {
      const node = new QueueNode(value);
      if (this.isEmpty()) {
         this.first = node;
         this.last = node;
      } else {
         // @ts-ignore
         this.last.next = node;
         this.last = node;
      }
      this.length++;
      return this.last.value;
   }

   dequeue() {
      const node = this.first;
      if (this.length === 0)
         return null;
      if (this.first === this.last)
         this.last = null;
      this.first = this.first.next;
      this.length--;
      return node.value;
   }

   isEmpty() {
      return this.length === 0;
   }
}

// const myQueue = new Queue();
// console.log('Added to the queue: ', myQueue.enqueue('Diogo'));
// console.log('Added to the queue: ', myQueue.enqueue('Carla'));
// console.log('Added to the queue: ', myQueue.enqueue('Daniel'));
// console.log('The first one in the queue is:', myQueue.peek(), 'line length is:', myQueue.length);
// console.log('Call the first one:', myQueue.dequeue(), 'line length is:', myQueue.length);
// console.log('Call the first one:', myQueue.dequeue(), 'line length is:', myQueue.length);
// console.log('Call the first one:', myQueue.dequeue(), 'line length is:', myQueue.length);

module.exports = Queue;