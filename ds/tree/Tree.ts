import TreeNode from "./TreeNode";

export default class Tree<T> {
  constructor() {}

  // depth first search traversal
  inorder(node: TreeNode<T> | null, callback: Function) {
    if (node) {
      this.inorder(node.left, callback);
      callback.call(this, ...arguments);
      this.inorder(node.right, callback);
    }
  }

  preorder(node: TreeNode<T> | null, callback: Function) {
    if (node) {
      callback.call(this, ...arguments);
      this.preorder(node.left, callback);
      this.preorder(node.right, callback);
    }
  }

  postorder(node: TreeNode<T> | null, callback: Function) {
    if (node) {
      this.postorder(node.left, callback);
      this.postorder(node.right, callback);
      callback.call(this, ...arguments);
    }
  }

  // Breadth first search traversal utility to compute height of the tree
  private getMaxLevel(node: TreeNode<T> | null, depth: number = 0): number {
    if (!node) return 0;

    const leftSubTreeDepth = this.getMaxLevel(node.left, depth++);
    const rightSubTreeDepth = this.getMaxLevel(node.right, depth++);

    return Math.max(leftSubTreeDepth, rightSubTreeDepth) + 1;
  }

  // Breadth first search traversal utility to visit level of the tree
  private visit(node: TreeNode<T> | null, level: number, i: number) {
    if (!node) return;

    if (level === 1) {
      console.log(`[INFO] Visited node at level[${i}] => `, node.element)
    } else {
      this.visit(node.left, level - 1, i);
      this.visit(node.right, level - 1, i);
    }
  }
  // Breadth First Search
  breadthFirstSearch(node: TreeNode<T> | null) {
    const level = this.getMaxLevel(node);
    for (let i = 0; i <= level; i++) {
      this.visit(node, i, i);
    }
  }

  // utility to print
  print(root: TreeNode<T> | null): void {
    const height = this.getMaxLevel(root);
    const width = this.getLeafCount(root);
    const mid = Math.floor(width / 2);
    const matrix = new Array(height);
    for (let row = 0; row < matrix.length; row++) {
      matrix[row] = new Array();
    }
    this.extractNodes(root, 0, mid, matrix, false, false);
    for (let row = 0; row < matrix.length; row++) {
      const appendCount = Math.floor((width - matrix[row].length) / 2);
      let append = "";
      for (let j = 0; j < appendCount; j++) {
        append += " ";
      }
      console.log(append + matrix[row].join(" "));
    }
  }

  private extractNodes(
    node: TreeNode<T> | null, 
    depth: number = 0, 
    mid: number,
    levels: any[],
    addLeft: boolean,
    addRight: boolean
  ): void {
    if (node?.left) {
      this.extractNodes(node.left, depth + 1, mid, levels, true, false);
    }
    levels[depth] = levels[depth] || [];
    levels[depth].push(node?.element);

    if (node?.right) {
      this.extractNodes(node.right, depth + 1, mid, levels, false, true);
    }
  }

  // Utility to calculate no of lead nodes
  private getLeafCount(node: TreeNode<T> | null): number {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return 1;
    } else {
      return this.getLeafCount(node.left) + this.getLeafCount(node.right);
    }
  }
}