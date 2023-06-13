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

  private insertQueue(node: TreeNode<T>, newNode: TreeNode<T>) {
    const q = new Queue<TreeNode<T>>();
    q.add(node);

    while(q.size() > 0) {
      node = q.remove()!;
      if (!node.left) {
        node.left = newNode;
        // console.log("left: ", node.left.element, " parent", node.element);
        break;
      } else {
        q.add(node.left);
      }

      if (!node.right) {
        node.right = newNode;
        // console.log("right: ", node.right.element, " parent", node.element);
        break;
      } else {
        q.add(node.right);
      }
    }
  }

  insert(element: T): void {
    const node = new TreeNode<T>(element);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertQueue(this.root, node);
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

console.log(tree.print(tree.root));

// console.log("--TRAVERSAL BFS--");
// tree.breadthFirstSearch(tree.root);

// console.log("\n--TRAVERSAL INORDER--");
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


