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

  // using level order traversal with queues
  private insertQueue(node: TreeNode<T>, newNode: TreeNode<T>) {
    const q = new Queue<TreeNode<T>>();
    q.enqueue(node);

    while(q.size() > 0) {
      node = q.dequeue()!;
      if (!node.left) {
        node.left = newNode;
        // console.log("left: ", node.left.element, " parent", node.element);
        break;
      } else {
        q.enqueue(node.left);
      }

      if (!node.right) {
        node.right = newNode;
        // console.log("right: ", node.right.element, " parent", node.element);
        break;
      } else {
        q.enqueue(node.right);
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

const tree = new BinaryTree<string>();

tree.insert("root");
tree.insert("1.root.left");
tree.insert("1.root.right");
tree.insert("2.root.left.left");
tree.insert("2.root.left.right");
tree.insert("2.root.right.left");
tree.insert("2.root.right.right");


// console.log("--TRAVERSAL BFS--");
// tree.levelOrder(tree.root);

// console.log("\n--TRAVERSAL INORDER--");
// tree.inorder(tree.root, (node: TreeNode<number> | null) => {
//   console.log("node visisted => ", node?.element);
// });

// console.log("\n--TRAVERSAL PRE-ORDER--");
// tree.preorder(tree.root, (node: TreeNode<number> | null) => {
//   console.log("node visisted => ", node?.element);
// });

console.log("\n--TRAVERSAL POST-ORDER--");
tree.postorder(tree.root);


