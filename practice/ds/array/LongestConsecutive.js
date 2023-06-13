/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  let longest = 0;
  for (let num of set) {
    if (!set.has(num-1)) {
      let streak = 1, curr = num;
      while(set.has(curr + 1)) {
        curr += 1;
        streak += 1;
      }
      longest = Math.max(longest, streak);
    }
  }
  return longest;
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));