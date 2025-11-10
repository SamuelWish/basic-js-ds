const { NotImplementedError } = require("../lib/errors");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.elem = [];
  }
  push(value) {
    this.elem.push(value);
  }

  pop() {
    return this.elem.pop();
  }

  peek() {
    return this.elem.length === 0 ? undefined : this.elem[this.elem.length - 1];
  }
}

module.exports = {
  Stack,
};
