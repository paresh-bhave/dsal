/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  return (left === 0 || right === 0) ? (left + right + 1) : Math.min(left, right) + 1;
};


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9);;
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

console.log(minDepth(tree));