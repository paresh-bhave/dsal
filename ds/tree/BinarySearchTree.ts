import Queue from "../queue/Queue";
import Tree from "./Tree";
import TreeNode from "./TreeNode";

class BinaryTree<T> extends Tree<T> {
  root: TreeNode<T> | null;
  depth: number;
  count: number;

  constructor() {
    super();
    this.root = null;
    this.depth = 0;
    this.count = 10;
  }

  private insertRecursive(root: TreeNode<T>, node: TreeNode<T>) {
    if (node.element < root.element) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertRecursive(root.left, node);
      }
    } else {
      if (!root.right) {
        root.right = node;
      } else {
        this.insertRecursive(root.right, node);
      }
    }
  }

  insert(element: T): void {
    const node = new TreeNode<T>(element);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertRecursive(this.root, node);
    }
  }
}

const tree = new BinaryTree<number>();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);
tree.insert(70);
tree.insert(80);
tree.insert(90);
tree.insert(100);
tree.insert(110);
tree.insert(120);
tree.insert(130);
tree.insert(140);
tree.insert(150);

tree.print(tree.root);
// console.log("--TRAVERSAL BFS--");
// tree.breadthFirstSearch(tree.root);

// console.log("--\nTRAVERSAL INORDER--");
// tree.inorder(tree.root, (node: TreeNode<number> | null) => {
//   console.log("node visisted => ", node?.element);
// });

// console.log("\n--TRAVERSAL PRE-ORDER--");
// tree.preorder(tree.root, (node: TreeNode<number> | null) => {
//   console.log("node visisted => ", node?.element);
// });

// console.log("\n--TRAVERSAL POST-ORDER--");
// tree.postorder(tree.root, (node: TreeNode<number> | null) => {
//   console.log("node visisted => ", node?.element);
// });