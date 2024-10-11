class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Push Method - Push a new node onto the end of the list and return the new node

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Pop Method - Removes the last node from the list

  pop() {
    if (!this.head) return null;

    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedNode.prev = null;
      this.length--;
      return poppedNode;
    }
  }

  //   Unshift Method - Adds a new node to the beginning of the list
  // Steps:
  // 1. Create a new node with the given value
  // 2. If the list is empty, set the head and tail to the new node
  // 3. Otherwise, set the new node's next to the current head and the current head's prev to the new node
  // 4. Set the new node as the new head and update the length

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.prev = null;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.length++;
  }

  // Shift Method - removes the first Element from the list

  shift() {
    if (!this.head) return null;
    let firstElement = this.head;
    if (this.length === 1) {
      return null;
    }
    this.head = this.head.next;
    this.head.prev = null;
    firstElement = null;
    this.length--;

    return firstElement;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.shift();
console.log(myDoublyLinkedList);
