/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
 */

const tree = require("./input");

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(root === null) return [];
  
  let queue = [];
  let results = [];
  
  //do level order traversal
  queue.push(root);

  while(queue.length != 0){
    let levelSize = queue.length;
    let temp = [];

    for(let i = 0; i < levelSize; i++){
      let node = queue.shift();
      temp.push(node.val);

      if(node.left != null){
        queue.push(node.left);
      }

      if(node.right != null){
        queue.push(node.right);
      }
    }

    results.push(temp);
  }

  for (let i = 1; i < results.length; i += 2) {
    results[i].reverse();
  }
  return results;
};

zigzagLevelOrder(tree);