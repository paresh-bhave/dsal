/**
 * https://leetcode.com/problems/crawler-log-folder
 */

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  const stack = [];
  for (let i = 0; i < logs.length; i++) {
    const log = logs[i];
    switch(log) {
      case "../":
        if (stack.length) stack.pop();
        break;
      case "./": break;
      default:
        stack.push(log);
    }
  }
  return stack.length;
};

console.log(minOperations(["d1/","d2/","../","d21/","./"]));
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));
console.log(minOperations(["d1/","../","../","../"]));
console.log(minOperations(["./","../","./"]));