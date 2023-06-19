/**
 * https://leetcode.com/problems/average-of-levels-in-binary-tree
 */


const tree = require("./input");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  // getMaxLevel
  const map = {}, results = [];
  const getMaxLevel = (node, depth = 0) => {
    if (!node) return 0;
    const leftSubTreeDepth = getMaxLevel(node.left, depth++);
    const rightSubTreeDepth = getMaxLevel(node.right, depth++);
    return Math.max(leftSubTreeDepth, rightSubTreeDepth) + 1;
  }

  // visitLevel
  const visitLevel = (node, level, i) => {
    if (!node) return;
    if (level === 1) {
      if (!map[i]) {
        map[i] = {
          sum: node.val,
          count: 1
        }
      } else {
        map[i].sum += node.val;
        map[i].count++;
      }
    } else {
      visitLevel(node.left, level - 1, i);
      visitLevel(node.right, level - 1, i);
    }
  }

  const level = getMaxLevel(root);
  
  for (let i = 0; i <= level; i++) {
    visitLevel(root, i, i);
  }

  for(let key in map) {
    if (map.hasOwnProperty(key)) {
      const result = map[key].sum / map[key].count;
      results.push(parseFloat(result));
    }
  }
  console.log(results);
  return results;
};


var averageOfLevelsImproved = function(root) {
  let queue = new Array();
  if(root === null) return null;
  let ans = [];
  //do level order traversal
  queue.push(root);

  while(queue.length != 0){
    let levelSize =queue.length;
    let currSum = 0;

    for(let i=0;i<levelSize;i++){
      let node = queue.shift();
      currSum += node.val;

      if(node.left != null){
        queue.push(node.left);
      }

      if(node.right != null){
        queue.push(node.right);
      }
    }

    ans.push(currSum/levelSize);
  }

  return ans;
};

console.log(averageOfLevels(tree));