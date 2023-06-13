/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 */

/**
 * Approach 1: Using 2 Pointers
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquaresPtr = function(nums) {
  let results = [], start = 0, end = nums.length - 1, i = end;
  
  while(i > -1) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      results[i--] = nums[start]^2;
      start++;
    } else {
      results[i--] = nums[end]^2;
      end--;
    }
  }
  return results;
};

/**
 * Approach 2: Map & Sort
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = (nums) => nums.map((num) => num**2).sort((a, b) => a - b);

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));

