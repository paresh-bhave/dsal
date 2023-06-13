/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let stack = [];  
  const traverse = (node) => {
    if (node) {
      traverse(node.left);
      traverse(node.right);
      stack.push(node.val);
    }
  }
  traverse(root);
  return stack;
};


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(1);
tree.left = null;
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(inorderTraversal(tree));