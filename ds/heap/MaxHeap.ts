import Heap from "./Heap";

class MaxHeap extends Heap {
  constructor(capacity: number) {
    super(capacity);
  }

  protected compareUp(index: number, parentIndex: number): boolean {
    return this.heap[parentIndex] >= this.heap[index];
  }

  protected compareDown(index: number, largestIndex: number): boolean {
    return index < this.heap.length && this.heap[index] > this.heap[largestIndex];
  }

  // Extract the max value (root) from the heap
  public extractMax(): number | null {
    return this.extract();
  }
}

const heap = new MaxHeap(5);
heap.insert(5);
heap.insert(2);
heap.insert(10);
heap.insert(1);
heap.insert(7);


console.log("\nMax => ", heap.extractMax());
heap.print();

console.log("\nMax => ", heap.extractMax());
heap.print();

console.log("\nMax => ", heap.extractMax());
heap.print();