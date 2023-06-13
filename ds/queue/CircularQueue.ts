import Que from "./Que";

class CircularQueue<T> extends Que<T> {
  private readonly maxSize: number;
  protected start: number;
  protected end: number;

  constructor(k: number) {
    super();
    this.maxSize = k;
    this.start = -1;
    this.end = -1;
  }

  // Insert an element at the rear of the circular queue
  public add(element: T): void {
    if (this.isFull()) {
      console.log("[ERR] Queue is full");
      return;
    }
    if (this.isEmpty()) {
      this.start = 0;
    }
    this.end = (this.end + 1) % this.maxSize;
    this.items[this.end] = element;
  }

  // Delete an element from the front of the circular queue
  public remove(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    const value = this.items[this.start];
    if (this.start === this.end) {
      // Reset front and rear pointers if the queue becomes empty
      this.start = -1;
      this.end = -1;
    } else {
      this.start = (this.start + 1) % this.maxSize;
    }
    return value;
  }

  // Get the front element of the circular queue without removing it
  public front(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items[this.start];
  }

  // Get the rear element of the circular queue without removing it
  public rear(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items[this.end];
  }

  // Check if the circular queue is empty
  isEmpty(): boolean {
    return this.start === -1;
  }

  // Check if the circular queue is full
  isFull(): boolean {
    return (this.end + 1) % this.maxSize === this.start;
  }

  // Get the size of the circular queue
  size(): number {
    if (this.isEmpty()) {
      return 0;
    }
    if (this.start <= this.end) {
      return this.end - this.start + 1;
    } else {
      return this.maxSize - this.start + this.end + 1;
    }
  }

  // Clear the circular queue
  clear(): void {
    this.items = new Array(this.maxSize);
    this.start = -1;
    this.end = -1;
  }
}

// Example usage:
const circularQueue = new CircularQueue<number>(5);
circularQueue.add(1);
circularQueue.add(2);
circularQueue.add(3);
circularQueue.display();
console.log(circularQueue.front()); // Output: 1
console.log(circularQueue.rear()); // Output: 3
console.log(circularQueue.remove()); // Output: 1
console.log(circularQueue.size()); // Output: 2
console.log(circularQueue.isEmpty()); // Output: false
circularQueue.clear();
console.log(circularQueue.isEmpty()); // Output: true
