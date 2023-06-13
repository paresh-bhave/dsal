/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */

var minSubArrayLen = function(target, nums) {
  let sum = 0, start = 0, end = 0, min = nums.length+1;

  while(end >= start && end < nums.length) {
    if (sum < target) {
      sum += nums[end];
      end++;
    }

    while(sum >= target && end >= start) {
      min = Math.min(end - start, min);
      sum -= nums[start];
      start++;
    }
  }
  return min === nums.length + 1 ? 0 : min;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));