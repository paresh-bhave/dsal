
class BinarySearchTreeArray<T> {
  nodes: Array<T>;

  constructor() {
    this.nodes = new Array<T>();
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private insertRecursive(index: number, value: T): void {
    if (value < this.nodes[index]) {
      const leftChildIndex = this.getLeftChildIndex(index);
      if (!this.nodes[leftChildIndex]) {
        this.nodes[leftChildIndex] = value;
      } else {
        this.insertRecursive(leftChildIndex, value);
      }
    } else if (value > this.nodes[index]) {
      const rightChildIndex = this.getRightChildIndex(index);
      if (!this.nodes[rightChildIndex]) {
        this.nodes[rightChildIndex] = value;
      } else {
        this.insertRecursive(rightChildIndex, value);
      }
    } else {
      this.nodes[index] = value;
    }
  }

  public insert(value: T): void {
    if (this.nodes.length === 0) {
      this.nodes[0] = value;
    } else {
      this.insertRecursive(this.nodes.length-1, value);
    }
  }

  // Perform an in-order traversal of the BST
  inOrderTraversal(index = 0): void {
    if (!this.nodes[index]) {
      return;
    }

    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    this.inOrderTraversal(leftChildIndex);
    console.log(this.nodes[index]);
    this.inOrderTraversal(rightChildIndex);
  }
}

const tree = new BinarySearchTreeArray<number>();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);

console.log("--TRAVERSAL BFS BEFORE DELETE--");
tree.inOrderTraversal();
// tree.delete(10);
// console.log("\n--TRAVERSAL BFS AFTER DELETE--");
// tree.levelOrder(tree.root);