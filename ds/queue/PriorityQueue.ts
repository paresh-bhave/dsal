
interface PQueue<T> {
  element: T;
  priority: number;
}

class PQueueElement<T> implements PQueue<T> {
  element: T;
  priority: number;
  constructor(element: T, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  private items: Array<PQueueElement<T>>;
  constructor() {
    this.items = [];
  }

  // Add element to the queue with a priority
  public enqueue(element: T, priority: number): void {
    const item = new PQueueElement<T>(element, priority);
    this.items.push(item);
    this.items.sort((a, b) => a.priority - b.priority);
  }

  // Remove and return the element with the highest priority
  public dequeue(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items.shift()?.element;
  }

  public front(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items[0].element;
  }

  public rear(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.items[this.items.length-1].element;
  }

  public isEmpty(): boolean {
    return this.items.length == 0;
  }

  public clear(): void {
    this.items = [];
  }
}

const queue = new PriorityQueue<string>();

queue.enqueue("Task A", 3);
queue.enqueue("Task B", 1);
queue.enqueue("Task C", 2);
queue.enqueue("Task D", 4);
queue.enqueue("Task E", 6);
queue.enqueue("Task F", 5);
queue.enqueue("Task J", 9);
queue.enqueue("Task H", 8);
queue.enqueue("Task I", 7);

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.front());
console.log(queue.rear());

console.log(queue.isEmpty());
queue.clear();
console.log(queue.isEmpty());



