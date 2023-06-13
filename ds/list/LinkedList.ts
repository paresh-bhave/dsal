import ListNode from './ListNode';

class LinkedList<T> {
  head: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // insert at the end of the list
  append(element: T): void {
    const node = new ListNode<T>(element);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }

  // insert at the start of the list
  prepend(element: T): void {
    const node = new ListNode<T>(element);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  // simplied naming convention to addLast 
  insert(element: T): void {
    this.append(element);
  }

  // insert at specific position
  insertAt(index: number, element: T): void {
    if (index < 0 || index > this.length) {
      console.log("[ERR] invalid position to insert the element");
      return;
    }

    const node = new ListNode<T>(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      let prev = null;
      let counter = 0;

      while(counter < index) {
        counter++;
        prev = curr;
        if (curr) curr = curr?.next;
      }

      node.next = curr;
      if (prev) prev.next = node;
    }
    this.length++;
  }

  // get element from specific position
  get(position?: number): T | undefined {
    let index = position && position >= 0 ? position : 0;
    if (position === 0) {
      return this.head?.element;
    }
    if (index >= 0) {
      let curr = this.head;
      let iterator = 0;
      while(iterator < index) {
        iterator++;
        if (curr) curr = curr?.next;
      }
      return curr?.element;
    }
    return;
  }

  // get element from start
  first(): T | undefined {
    if (this.isEmpty()) {
      return;
    }
    return this.head?.element;
  }

  // get element from the end
  last(): T | undefined {
    if (this.isEmpty()) {
      return;
    }
    let curr = this.head;
    while(curr?.next) {
      curr = curr.next;
    }
    return curr?.element;
  }

  // find index of the element
  find(element: T): number {
    let current = this.head;
    let iterator = 0;
    while (current) {
      if (current.element === element) {
        return iterator;
      }
      current = current.next;
      iterator++;
    }
    return -1;
  }

  // remove matching element from the list
  remove(element: T): void {
    if (this.isEmpty()) {
      console.log("LinkedList is empty");
      return;
    }

    if (this.head?.element === element) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      let prev = null;

      while (curr && curr.element !== element) {
        prev = curr;
        curr = curr.next;
      }

      if (curr && prev) {
        prev.next = curr.next;
      } else {
        console.log("Element not found in the LinkedList");
        return;
      }
    }
    this.length--;
  }

  // remove matching element from the list
  removeFirst(): void {
    if (this.isEmpty()) {
      console.log("LinkedList is empty");
      return;
    }
    if (this.head) this.head = this.head?.next;
    this.length--;
  }

  // remove matching element from the list
  removeLast(): void {
    if (this.isEmpty()) {
      console.log("LinkedList is empty");
      return;
    }
    if (!this.head?.next) {
      this.head = null;
      return;
    }

    let curr = this.head;
    let prev = null;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    if (prev) prev.next = null;
    this.length--;
  }

  // check if element exists
  contains(element: T): boolean {
    return this.find(element) > -1;
  }

  // display elements
  display(node: ListNode<T> | null = null): string {
    let curr = node || this.head;
    let result = "";
    while (curr) {
      result += curr.element + " -> ";
      curr = curr.next;
    }
    result += "null";
    console.log(`[${this.length}]`,result);
    return result;
  }

  // util to check if list is empty
  isEmpty(): boolean {
    return this.length === 0;
  }
}

export default LinkedList;