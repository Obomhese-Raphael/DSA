class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      // If the vertex doesn't exist, it's added to the adjacency list with an empty array as its value. This indicates that the vertex has no connections yet.
      this.adjacencyList[vertex] = [];
      return true; // Already added to the adjacency list
    }
    return false; // Vertex already exists in the graph so addition has failed
  }

  // Method to remove a vertex from the graph
  removeVertex(vertex) {
    // If the vertex exists in the graph, its connections are removed from the adjacency list.
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
      return true; // Vertex removed successfully
    }
    return false; // Vertex doesn't exist in the graph so removal has failed
  }

  // connection
  addEdge(vertex1, vertex2) {
    // If both vertices exist in the graph, an edge is added between them.
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // For undirected graph, we add an edge in both directions.
      return true; // Edge added successfully
    }
    return false; // Either of the vertices doesn't exist in the graph so edge addition has failed
  }

  // Method to remove a edge from the graph
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex2].filter(
        (v) => v === vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(
        (v) => v === vertex1
      ); // For undirected graph, we remove an edge in both directions.
      return true; // Edge removed successfully
    }
    return false; // Either of the vertices doesn't exist in the graph so edge removal has failed
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");
console.log(g.adjacencyList); 
g.removeVertex("B");
console.log(g.adjacencyList); 
console.log(g);
