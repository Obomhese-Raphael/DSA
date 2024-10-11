// Stack and Queues in Data Structures and Algorithms
// LIFO - Last In, First Out

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    if (value !== undefined) {
      const newNode = new Node(value);
      this.first = newNode;
      this.length = 1;
    } else {
      this.first = null;
      this.length = 0;
    }
  }

  // Push Method - Push a new node onto the top of the stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return this;
  }

  // Pop Method - Pop out a node from the top of the stack
  pop() {
    if (!this.first) {
      return null;
    }

    if (this.length === 1) {
      return this.first;
    }

    if (this.length === 0) {
      return null;
    }

    let removedNode = this.first;
    this.first = this.first.next;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  // isEmpty Method - returns true if this node is empty
  isEmpty() {
    return this.length === 0;
  }

  // Contains method - returns true if this node contains the specified method
  contains(value) {
    let currentNode = this.first;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Reverse Method - reverses the order of the nodes in the stack
  reverse() {
    let currentNode = this.first;
    let previousNode = null;
    let tempNode; // temporarily reference to the next pointer of the current node

    while (currentNode) {
      tempNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = tempNode;
    }
    this.first = previousNode;
    return this;
  }

  // top Method - returns the current node at the top of the stack
  top() {
    if (!this.first) {
      return null;
    }
    return this.first;
  }

  // minimum value - returns the minimum value
  min() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;
      if (current.value < minValue) {
        minValue = current.value;
      }
    }

    return minValue;
  }
}


let theStack = new Stack(0);
theStack.push(1);
theStack.push(2);
theStack.push(3);
console.log(theStack.min());