// ! Linked Lists

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // Push Method - adds a new node to the end of the list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Pop Method - removes the last node from the list
  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    let currentNode = this.head;
    let prevNode = this.head;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = prevNode.next;
    }

    this.tail = prevNode;
    this.tail.next = null;
    this.length--;

    return currentNode;
  }

  // Remove Method - Removes a node from the list
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    if (!currentNode.next) {
      return null;
    }

    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    const removedNode = currentNode.next;
    currentNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // Unshift Method - adds a new node to the beginning of the list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Shift - removes the node from the top of the list
  shift() {
    if (!this.head) {
      return null;
    }

    // 1. Point to the first node in the list
    const tempNode = this.head;
    // 2. Move the fist pointer to the next node
    this.head = this.head.next;
    // 3. Remove the first node from the list
    this.next = null;
    // 4. Decrement the length of the list
    this.length--;
    // 5.  return the temp node
    return tempNode;
  }

  // Get first Method - retrieves the first node of the list
  getFirst() {
    return this.head;
  }
  // Get last Method - retrieves the last node of the list
  getLast() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // Get Method - retrieves a node at a given index
  getByIndex(index) {
    if (!this.head) return null;
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  // Set Method - In a linked list, the set method is typically used to modify the value of a node at a specific index.

  set(index, value) {
    if (!this.head) return null;
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentIndex === index) {
        currentNode.value = value;
        return true;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return false;
  }

  // Insert Method - The insert method is used to add a new node to a linked list at a specified index.
  // Steps -
  // 1. Check if the index is out of bounds (less than 0 or greater than length). If so, return false.
  // 2. If the index is 0, use the unshift method.
  // 3. If the index is equal to the length, use the push method.
  // 4. If the index is greater than 0, create a new node, set its value to the given value, and link it to the previous node and the next node.
  // 5. Return true.

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return null; // Index out of bounds
    }

    if (index === 0) {
      return this.unshift(value); // add the value to the beginning of the list
    }

    if (index === this.length - 1) {
      return this.push(value); // push the value onto the end of the list
    }

    if (index > 0 && index < this.length - 1) {
      const newNode = new Node(value);
      const previousNode = this.getByIndex(index - 1);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length++;
      return true;
    }
  }

  // Clear Method - Removes all nodes from the list

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return true;
  }

  // Reverse Method - Reverses the order of the nodes in the list
  reverse() {
    if (!this.head || !this.head.next) {
      return this; // returns the unmodified linked list
    }

    let currentNode = this.head; // first node in list
    let prevNode = null; // since there is no previous node before the first node
    let nextNode = null;

    // Traverse the list and reverse the links
    while (currentNode) {
      // while current node exists i.e till the last node,
      nextNode = currentNode.next; // stores the reference to the next node before modifying the list
      currentNode.next = prevNode; // reverse the next pointer of the current node to point to the previous node
      prevNode = currentNode; // Update the prevNode to the current node, effectively moving the "previous node" refrence foward.
      currentNode = nextNode; //Updates currentNode to the next node in the list, moving the loop forward
    }

    const firstNode = this.head;
    this.head = prevNode;
    this.tail = firstNode;
    return this;
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
console.log(myLinkedList);
myLinkedList.remove(1);
console.log(myLinkedList);
// myLinkedList.reverse();
// console.log(myLinkedList);
