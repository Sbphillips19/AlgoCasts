// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// stack still ordered list of records
// push new record on a stack, pop off a stack after
// FILO- first in last out
// LIFO- last in first out

class Stack {
  constructor() {
    this.data = [];
  }

  // add to the top
  push(record) {
    this.data.push(record);
  }

  // remove top
  pop() {
    return this.data.pop();
  }

  //return top record without popping
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
