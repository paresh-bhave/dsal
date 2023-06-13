import Heap from "./Heap";

class MinHeap extends Heap {
  constructor(capacity: number) {
    super(capacity);
  }

  protected compareUp(index: number, parentIndex: number): boolean {
    return this.heap[parentIndex] <= this.heap[index];
  }

  protected compareDown(index: number, smallestIndex: number): boolean {
    return index < this.heap.length && this.heap[index] < this.heap[smallestIndex];
  }

  // Extract the minimum value (root) from the heap
  public extractMin(): number | null {
    return this.extract();
  }
}

const heap = new MinHeap(7);
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);

heap.print();

console.log("\nMin => ", heap.extractMin());
heap.print();

// console.log("\nMin => ", heap.extractMin());
// heap.print();

// console.log("\nMin => ", heap.extractMin());
// heap.print();