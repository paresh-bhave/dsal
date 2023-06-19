
class Graph<V> {
  adjacencyList: Map<V, Array<V>>;

  constructor() {
    this.adjacencyList = new Map<V, Array<V>>();
  }

  public addVertex(vertex: V): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  public addEdge(a: V, b: V): void {
    if (this.adjacencyList.has(a) && this.adjacencyList.has(b)) {
      this.adjacencyList.get(a)?.push(b);
      this.adjacencyList.get(b)?.push(a);
    }
  }

  public addDirectedEdge(from: V, to: V): void {
    if (this.adjacencyList.has(from) && this.adjacencyList.has(to)) {
      this.adjacencyList.get(from)?.push(to);
    }
  }

  getNeighbors(vertex: V): Array<V> {
    const neighbors = this.adjacencyList.get(vertex);
    return neighbors ? neighbors : [];
  }

  printGraph(): void {
    for (let [vertex, neighbors] of this.adjacencyList) {
      console.log(vertex + " -> " + neighbors.join(", "));
    }
  }

  // Breadth First Search
  bfs(startVertex: V): void {
    const visited: Map<V, boolean> = new Map<V, boolean>();
    const queue: Array<V> = [];

    visited.set(startVertex, true);  
    queue.push(startVertex);

    while(queue.length > 0) {
      const currentVertex = queue.shift();
      console.log("Vertex Visisted => ", currentVertex);

      if (currentVertex) {
        const neighbors = this.adjacencyList.get(currentVertex);
        if (neighbors) {
          for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              visited.set(neighbor, true);
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }

  dfs(startVertex: V): void {
    const visited: Map<V, boolean> = new Map<V, boolean>();
    this.dfsUtil(startVertex, visited);
  }

  private dfsUtil(node: V, visited: Map<V, boolean>) {
    console.log("Vertex Visisted => ", node);
    visited.set(node, true);
    const neighbors = this.adjacencyList.get(node);
    if (neighbors) {
      for(let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsUtil(neighbor, visited);
        }
      }
    }
  }
}

// Example usage:
const graph = new Graph<string>();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");
graph.addEdge("D", "B");
graph.addEdge("E", "D");

graph.dfs("A");

export default Graph;