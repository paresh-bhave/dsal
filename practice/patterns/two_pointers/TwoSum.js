/**
* https://leetcode.com/problems/two-sum/
* 
* Pattern: Two-pointers
*/

/**
* Approach 1: Using HashMap
* Trade-Off: Space
* @param {*} nums 
* @param {*} target 
* @returns 
*/
var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }
};

/**
* Another approach using 2 pointers
* @param {*} nums 
* @param {*} target 
* @returns 
*/
var twoSumPtr = function(nums, target) {
  const n = nums.length;
  let match = false;
  for (let i = 0, j = n - 1; i <= j && !match; i++, j--) {
    let diff1 = target - nums[i];
    let idx1 = nums.indexOf(diff1);
    let diff2 = target - nums[j];
    let idx2 = nums.indexOf(diff2);
    
    if (idx1 > -1 && idx1 !== i) {
      match = true;
      return [i, idx1];
    }
    if (idx2 > -1 && idx2 !== j) {
      match = true;
      return [j, idx2];
    }
  }
};