import Que from "./Que";

class Dequeue<T> extends Que<T> {
  constructor() {
    super();
  }

  public addFront(element: T): void {
    this.items.unshift(element);
  }

  public addRear(element: T): void {
    this.items.push(element);
  }

  public removeFront(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items.shift();
  }

  public removeRear(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items.pop();
  }

  public front(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items[0];
  }

  public rear(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items[this.items.length-1];
  }
}

// Example usage:
const dequeue = new Dequeue();
dequeue.addFront(10);
dequeue.addRear(20);
dequeue.addFront(5);
console.log(dequeue.front()); // Output: 5
console.log(dequeue.rear()); // Output: 20
console.log(dequeue.removeFront()); // Output: 5
console.log(dequeue.removeRear()); // Output: 20
console.log(dequeue.size()); // Output: 1
console.log(dequeue.isEmpty()); // Output: false
dequeue.clear();
console.log(dequeue.isEmpty()); // Output: true

export default Dequeue;

