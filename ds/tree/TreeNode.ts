
export default class TreeNode<T> {
  element: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(element: T) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}