import Queue from "../queue/Queue";
import Tree from "./Tree";
import TreeNode from "./TreeNode";

class BinarySearchTree<T> extends Tree<T> {
  root: TreeNode<T> | null;
  depth: number;
  count: number;

  constructor() {
    super();
    this.root = null;
    this.depth = 0;
    this.count = 10;
  }

  private insertRecursive(root: TreeNode<T> | null, value: T): TreeNode<T> {
    if (!root) {
      return new TreeNode<T>(value);;
    } else {
      if (value < root.value) {
        root.left = this.insertRecursive(root.left, value);
      } else if (value > root.value) {
        root.right = this.insertRecursive(root.right, value);
      } else {
        root.value = value;
      }
    }
    return root;
  }

  public insert(value: T): void {
    this.root = this.insertRecursive(this.root, value);
  }

  private deleteRecursive(root: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (root === null) {
      console.log(`No such node found to delete for value[${value}]`);
      return null;
    };

    if (value < root.value) {
      root.left = this.deleteRecursive(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteRecursive(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      let value = this.getMin(root.right);
      if (value) root.value = value;
      root.right = this.deleteRecursive(root.right, root.value);
    }
    return root;
  }

  public delete(value: T): void {
    this.root = this.deleteRecursive(this.root, value);
  }

  /*Get utils*/
  public findRecursive(root: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!root) {
      console.log(`No such node found for value[${value}]`);
      return null;
    } else if (value < root.value) {
      return this.findRecursive(root.left, value);
    } else if(value > root.value) {
      return this.findRecursive(root.right, value);
    }
    return root;
  }

  public find(value: T) {
    return this.findRecursive(this.root, value);
  }

  public getMin(root: TreeNode<T> | null): T | undefined {
    if (!root) return;
    let min = root.value;
    while (root.left !== null) {
      min = root.left.value;
      root = root.left;
    }
    return min;
  }

  public getMax(root: TreeNode<T> | null): T | undefined {
    if (!root) return;
    let max = root.value;
    while (root.right) {
      max = root.right.value;
      root = root.right;
    }
    return max;
  }
}

const tree = new BinarySearchTree<number>();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);


console.log("--TRAVERSAL BFS BEFORE DELETE--");
tree.levelOrder(tree.root);

tree.delete(10);
console.log("\n--TRAVERSAL BFS AFTER DELETE--");
tree.levelOrder(tree.root);

console.log("MAX ", tree.getMax(tree.root))
console.log("MIX ", tree.getMin(tree.root))

// console.log("--\nTRAVERSAL INORDER--");
// tree.inorder(tree.root, (node: TreeNode<number> | null) => {
//   console.log("node visisted => ", node?.value);
// });

// console.log("\n--TRAVERSAL PRE-ORDER--");
// tree.preorder(tree.root, (node: TreeNode<number> | null) => {
//   console.log("node visisted => ", node?.value);
// });

// console.log("\n--TRAVERSAL POST-ORDER--");
// tree.postorder(tree.root, (node: TreeNode<number> | null) => {
//   console.log("node visisted => ", node?.value);
// });