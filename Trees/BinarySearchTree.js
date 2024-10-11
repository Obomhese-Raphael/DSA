class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  // Includes - check if the input node is already included
  includes(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left; // let the current node at the left position be the new current node
      } else if (value > currentNode.value) {
        currentNode = currentNode.right; // let the current node at the right position be the new current node
      } else {
        return true; // return the current node since the value is equal to the current node
      }
    }
    return false; // if the loop completes without returning, the value is not in the tree
  }
}

// Example usage:

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree);
