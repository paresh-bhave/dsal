
export default class Heap {
  size: number;
  heap: Array<number>;

  constructor(capacity: number) {
    this.size = capacity;
    this.heap = [];
  }

  private isFull(): boolean {
    return this.heap.length === this.size;
  }

  protected getParenIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  protected getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  protected getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  protected swap(source: number, destination: number): void {
    [this.heap[source], this.heap[destination]] = [this.heap[destination], this.heap[source]];
  }

  protected compareUp(index: number, parentIndex: number): boolean {
    return false;
  }

  protected bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.getParenIndex(index);
      if (this.compareUp(index, parentIndex)) {
        // MinHeap: Parent is smaller or equal, heap property is satisfied
        // MaxHeap: Parent is larger or equal, heap property is satisfied
        break; 
      }
      this.swap(index, parentIndex);
      index = parentIndex; // Move up to the parent index
    }
  }

  protected compareDown(index: number, smallestIndex: number): boolean {
    return false;
  }

  protected bubbleDown(index: number): void {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let currentIndex = index;

    if (this.compareDown(leftChildIndex, currentIndex)) {
      currentIndex = leftChildIndex;
    }

    if (this.compareDown(rightChildIndex, currentIndex)) {
      currentIndex = rightChildIndex;
    }

    if (currentIndex !== index) {
      this.swap(index, currentIndex);
      this.bubbleDown(currentIndex);
    }
  }

  public insert(value: number): void {
    if (this.isFull()) {
      console.log("[ERR] Heap out of memory!");
      return;
    }
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  protected extract(): number | null {
    if (this.heap.length === 0) {
      return null;
    }

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastValue!;
      this.bubbleDown(0);
    }

    return minValue;
  }

  public print(): void {
    for (let i = 0; i < Math.floor(this.heap.length / 2); i++) {
      const left = this.heap[this.getLeftChildIndex(i)] || "NULL";
      const right = this.heap[this.getRightChildIndex(i)] || "NULL";
      console.log(`${left} <- ${this.heap[i]} -> ${right}`)
    }
  }
}

