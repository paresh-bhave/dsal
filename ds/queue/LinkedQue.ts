import DLinkedList from "../list/DLinkedList";

class LinkedQue<T> {
  protected list: DLinkedList<T>;

  constructor() {
    this.list = new DLinkedList<T>;
  }

  public size(): number {
    return this.list.length;
  }

  public isEmpty(): boolean {
    return this.list.length == 0;
  }

  public display(): void {
    let result = "     "
    for(let i = 0; i < this.list.length; i++) {
      result += " ---- ";
    }
    result += "\nF <- ";
    for(let i = 0; i < this.list.length; i++) {
      result += "| " + this.list.get(i) + " |"
    }
    result += " <- R \n     ";
    for(let i = 0; i < this.list.length; i++) {
      result += " ---- ";
    }
    console.log(result);
  }

  public clear() {
    for (let i = 0; i < this.size(); i++) {
      this.list.removeLast();
    }
    this.list.removeFirst();
  }
}

export default LinkedQue;