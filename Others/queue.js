// A Queue is a linear data structure that functions like waiting line. It follows the FIFO (First In, First Out) principle, meaning the element that enters the queue first will be the first to be removed from the queue.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  // enqueue Method - Adds a new node to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first || this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // dequeue Method - Removes and returns the first node from the queue
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    const removedNode = this.first;
    this.first = this.first.next;
    this.length--;
    return removedNode.value;
  }

  // peek Method - Returns the value of the first node in the queue without removing it
  peek() {
    if (this.length === 0) {
      return null;
    }

    let firstNode = this.first;
    return firstNode.value;
  }

  // isEmpty Method - Returns true if the queue is empty, false otherwise
  isEmpty() {
    return this.length === 0;
  }
}

let myQueue = new Queue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.peek();
console.log(myQueue);
myQueue.isEmpty();
console.log(myQueue);