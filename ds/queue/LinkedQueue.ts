
/**
 * First-In-First-Out (FIFO)
 */

import LinkedQue from "./LinkedQue";

class LinkedQueue<T> extends LinkedQue<T> {
  constructor() {
    super();
  }

  add(element: T): void {
    this.list.insert(element);
  }

  remove(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    const element = this.list.first();
    this.list.removeFirst();
    return element;
  }

  front(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.list.first();
  }
}


// Example usage:
const queue = new LinkedQueue<number>();
queue.add(10);
queue.add(20);
queue.add(30);
queue.add(40);

console.log(queue.front()); // Output: 5
console.log(queue.remove()); // Output: 5
console.log(queue.size()); // Output: 1
console.log(queue.isEmpty()); // Output: false
queue.clear();

export default LinkedQueue;