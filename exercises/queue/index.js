// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// a javascript array does everyhting that a queue does
// still sometimes interviewers ask you to build a queue

// records enter on one end and leave on another
// like buying tickets from a ticket counter
// order get into a queue is same as you get about
// ADD- enqueuing or adding a record
// REMOVE- dequeuing or removing a record

// FIFO- first in first about

// add to queue- array.unshift()
// remove from queue- array.pop()

class Queue {
  // constructor called automatically when create new instance
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;

// The push() method adds one or more elements to the end of an array and returns the new length of the array.
//
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
