import ListNode from './ListNode';

class DLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert at the end of the list
  append(element: T): void {
    const node = new ListNode<T>(element);

    if (!this.head) {
      this.head = node;
    } else {
      node.prev = this.tail;
      if (this.tail) this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  // insert at the start of the list
  prepend(element: T): void {
    const node = new ListNode<T>(element);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  // simplied naming convention to addLast {
  insert(element: T): void {
    this.append(element);
  }

  // insert at specific position
  insertAt(index: number, element: T): void {
    if (index < 0 || index > this.length) {
      console.log("[ERR] invalid position to insert the element");
      return;
    }

    if (index === 0) {
      this.prepend(element);
      return;
    }

    // If the index is equal to the size of the list, append the node to the end
    if (index === this.length) {
      this.append(element);
      return;
    }

    const node = new ListNode<T>(element);
    let curr = this.head;
    let iterator = 0;

    while (curr) {
      if (iterator === index) {
        const prev = curr.prev;
        node.prev = prev;
        node.next = curr;
        if (prev) {
          prev.next = node;
        } else {
          this.head = node;
        }
        curr.prev = node;
        return;
      }

      curr = curr.next;
      iterator++;
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
    return this.tail?.element;
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
      console.log("[ERR] list is empty");
      return;
    }

    let curr = this.head;

    while (curr) {
      if (curr.element === element) {
        if (curr === this.head) {
          this.head = curr.next;
          if (this.head) this.head.prev = null;
        } else if (curr === this.tail) {
          if (curr.prev) this.tail = curr.prev;
          if (this.tail) this.tail.next = null;
        } else {
          const prev = curr.prev;
          const next = curr.next;
          if (prev) prev.next = next;
          if (next) next.prev = prev;
        }
        break;
      }
      curr = curr.next;
    }
    this.length--;
  }

  // remove matching element from the list
  removeFirst(): void {
    if (this.isEmpty()) {
      console.log("[ERR] list is empty");
      return;
    }
    if (this.head) this.head = this.head?.next;
    this.length--;
  }

  // remove matching element from the list
  removeLast(): void {
    if (this.isEmpty()) {
      console.log("[ERR] list is empty");
      return;
    }
    if (this.tail?.prev) {
      this.tail = this.tail?.prev;
      this.tail.next = null;
    };
    this.length--;
  }

  // check if element exists
  contains(element: T): boolean {
    return this.find(element) > -1;
  }

  // display elements
  display(node: ListNode<T> | null = null): string {
    let current = node || this.head;
    let result = !node ? "null <- " : "";
    while(current) {
      result += current.element + (current.next ? " <-> " : " -> ");
      current = current.next;
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

export default DLinkedList;