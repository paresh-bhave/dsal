/*
 * Last-In-First-Out (LIFO)
 * Note: In JS, a simple array can perform pretty much all of stack operations such a push(), pop(),
 * for peek you can do arr[arr.length-1] and array size is also dynamic
 * Following implementation is just to showcase how stack can be implemented in other languages
 * Also, You may need to consider additional implementation changes in strongly typed languages
**/

class Stack<T> {
  private elements: Array<T>;
  private maxSize: number;

  constructor(size: number) {
    this.elements = [];
    this.maxSize = size;
  }

  push(element: T): void {
    if (this.isFull()) {
      console.log("[ERR] stack overflow");
      return; 
    }
    this.elements.push(element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      console.log("[ERR] stack underflow");
    }
    return this.elements.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      console.log("[ERR] stack underflow");
    }
    return this.elements[this.elements.length-1];
  }

  size(): number {
    return this.elements.length;
  }

  isEmpty(): boolean {
    return this.elements.length == 0;
  }

  isFull(): boolean {
    return this.elements.length === this.maxSize;
  }

  display(): void {
    let result = "----"
    for(let i = this.elements.length - 1; i >= 0; i--) {
      result += "\n|" + this.elements[i] + "|"
      result += "\n----";
    }
    console.log(result);
  }
}

export default Stack;