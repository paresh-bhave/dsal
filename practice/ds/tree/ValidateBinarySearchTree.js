/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

const tree = require("./input");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const isValid = (node, prev) => {
    if (node) {
      if (!isValid(node.left, prev)) return false;

      if (prev && node.val <= prev.val) return false;
      prev = root;

      return isValid(node.right, prev);
    } 
    return true;
  };
  return isValid(root, null);
};

var isValid2 = function(root) {
  var isValidBST = function(root) {
    const isValid = (node, lower, upper) => {
      // base case
      if (!node) return true;
  
      if (lower < node.val < upper) {
        return isValid(node.left, lower, node.val) && isValid(node.right, node.val, upper);
      }
      return false;
    };
    return isValid(root, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  };
}

console.log(isValidBST(tree));