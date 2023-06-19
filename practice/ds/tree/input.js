
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(1);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

module.exports = tree;