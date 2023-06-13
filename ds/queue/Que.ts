
class Que<T> {
  protected items: Array<T>;

  constructor() {
    this.items = [];
  }

  public size(): number {
    return this.items.length;
  }

  public isEmpty(): boolean {
    return this.items.length == 0;
  }

  public display(): void {
    let result = "     "
    for(let i = 0; i < this.items.length; i++) {
      result += " ---- ";
    }
    result += "\nF <- ";
    for(let i = 0; i < this.items.length; i++) {
      result += "| " + this.items[i] + " |"
    }
    result += " <- R \n     ";
    for(let i = 0; i < this.items.length; i++) {
      result += " ---- ";
    }
    console.log(result);
  }

  public clear() {
    this.items = [];
  }
}

export default Que;