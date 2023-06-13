/**
 * Last-In-First-Out (LIFO)
 */
import DLinkedList from "../list/DLinkedList";

class LinkedStack<T> {
  private list: DLinkedList<T>;

  constructor() {
    this.list = new DLinkedList<T>;
  }

  push(element: T): void {
    this.list.insert(element);
  }

  pop(): T | undefined {
    if (this.list.isEmpty()) {
      console.log("[ERR] stack underflow");
    }
    const element = this.list.last();
    this.list.removeLast();
    return element;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      console.log("[ERR] stack underflow");
    }
    return this.list.last();
  }

  size(): number {
    return this.list.length;
  }

  isEmpty(): boolean {
    return this.list.length == 0;
  }

  display(): void {
    let result = "----"
    for(let i = this.list.length - 1; i >= 0; i--) {
      result += "\n|" + this.list.get(i) + "|"
      result += "\n----";
    }
    console.log(result);
  }
}

export default LinkedStack;