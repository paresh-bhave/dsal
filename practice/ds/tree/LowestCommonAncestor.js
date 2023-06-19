/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/2720617/javascript-solution/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    
  let ans;
  
  const recurseTree = (currentNode, p, q) => {

      if (currentNode === null) return false;

      const left = recurseTree(currentNode.left, p, q) ? 1 : 0;
      const right = recurseTree(currentNode.right, p, q) ? 1 : 0;
      const mid = (currentNode === p || currentNode === q) ? 1 : 0;

      if (mid + left + right >= 2) {
          ans = currentNode;
      }
      return (mid + left + right > 0);
  }
  
  recurseTree(root, p, q);
  
  return ans;
};