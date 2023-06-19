import Queue from "../queue/Queue";
import TreeNode from "./TreeNode";

export default class Tree<T> {
  constructor() {}

  // depth first search traversal
  inorder(node: TreeNode<T> | null) {
    if (node) {
      this.inorder(node.left);
      console.log("Node Visisted => ", node.value);
      this.inorder(node.right);
    }
  }

  preorder(node: TreeNode<T> | null) {
    if (node) {
      console.log("Node Visisted => ", node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node: TreeNode<T> | null) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log("Node Visisted => ", node.value);
    }
  }

  // Using queue: Trade-Off - Space
  levelOrder(root: TreeNode<T> | null) {
    // Define a queue
    const queue = new Queue<TreeNode<T>>();
    
    if (root) queue.enqueue(root);

    while(!queue.isEmpty()) {
      const node = queue.dequeue();
      console.log("Node visited -> ", node?.value,);
      if (node?.left) {
        queue.enqueue(node.left);
      }
      if (node?.right) {
        queue.enqueue(node.right);
      }
    }
  }
}