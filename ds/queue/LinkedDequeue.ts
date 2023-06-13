import LinkedQue from "./LinkedQue";

class LinkedDequeue<T> extends LinkedQue<T> {
  constructor() {
    super();
  }

  public addFront(element: T): void {
    this.list.prepend(element);
  }

  public addRear(element: T): void {
    this.list.append(element);
  }

  public removeFront(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    const element = this.list.first();
    this.list.removeFirst();
    return element;
  }

  public removeRear(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    const element = this.list.last();
    this.list.removeLast();
    return element;
  }

  public front(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.list.first();
  }

  public rear(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.list.last();
  }
}

// Example usage:
const dequeue = new LinkedDequeue();
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

export default LinkedDequeue;

