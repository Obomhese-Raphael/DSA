// JavaScript program to find the maximum depth of
// a binary tree using depth-first search (DFS) approach.

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

// Returns "maxDepth" which is the number of nodes
// along the longest path from the root node down 
// to the farthest leaf node.
function maxDepth(node) {
  if (node === null) return 0;

  // compute the depth of left and right subtrees
  const lDepth = maxDepth(node.left);
  const rDepth = maxDepth(node.right);

  return Math.max(lDepth, rDepth) + 1;
}

// Representation of the input tree:
//     1
//    / \
//   2   3
//  / \
// 4   5
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(root);

console.log(maxDepth(root)); 
