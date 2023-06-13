
/**
 * First-In-First-Out (FIFO)
 */
class Queue<T> {
  private elements: Array<T>;

  constructor() {
    this.elements = [];
  }

  public add(element: T): void {
    this.elements.push(element);
  }

  public remove(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.elements.shift();
  }

  public front(): T | undefined {
    if(this.isEmpty()) {
      console.log("[ERR] queue is underflow");
      return;
    }
    return this.elements[0];
  }

  public size(): number {
    return this.elements.length;
  }

  public isEmpty(): boolean {
    return this.elements.length == 0;
  }

  public display(): void {
    let result = "     "
    for(let i = 0; i < this.elements.length; i++) {
      result += " ---- ";
    }
    result += "\nF <- ";
    for(let i = 0; i < this.elements.length; i++) {
      result += "| " + this.elements[i] + " |"
    }
    result += " <- R \n     ";
    for(let i = 0; i < this.elements.length; i++) {
      result += " ---- ";
    }
    console.log(result);
  }
}

export default Queue;