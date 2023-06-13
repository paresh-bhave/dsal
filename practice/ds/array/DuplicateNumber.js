/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num] < 0) return num;
    nums[num] = -nums[num];
    console.log(nums);
  }
};

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([2,2,2,2]));