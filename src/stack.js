const { NotImplementedError } = require('../extensions/index.js');

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
    this.st = [];
  }
  push(element) {
    //------Добавляет элемент в конец стека
    this.st.push(element);
  }

  pop() {
    //------Удаляет последний элемент
    if (this.st.length > 0) {
      return this.st.pop();
    }
  }

  peek() {
    //------Возвращает последний элемент
    let index = this.st.length - 1;
    return this.st[index];
  }
}

module.exports = {
  Stack
};
