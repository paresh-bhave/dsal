
class WGraph<V> {
  adjacencyList: Map<V, Map<V, number>>;

  constructor() {
    this.adjacencyList = new Map<V, Map<V, number>>();
  }

  public addVertex(vertex: V): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Map<V, number>());
    }
  }

  public addEdge(from: V, to: V, weight: number): void {
    if (this.adjacencyList.has(from) && this.adjacencyList.has(to)) {
      this.adjacencyList.get(from)?.set(to, weight);
    }
  }

  getNeighbors(vertex: V): Map<V, number> | undefined {
    return this.adjacencyList.get(vertex);
  }

  printGraph(): void {
    for (let [vertex, neighbors] of this.adjacencyList.entries()) {
      const edges = [];
      for (let [neighbor, weight] of neighbors.entries()) {
        edges.push(`${neighbor} (${weight})`);
      }
      console.log(vertex, "->", edges.join(", "));
    }
  }
}

// Example usage:
// const graph = new WGraph<string>();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addEdge("A", "B", 1);
// graph.addEdge("B", "C", 2);
// graph.addEdge("C", "D", 3);
// graph.addEdge("D", "A", 4);
// graph.addEdge("D", "B", 5);
// graph.addEdge("E", "D", 6);

// graph.printGraph();

export default WGraph;