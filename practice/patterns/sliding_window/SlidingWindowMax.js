/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * 
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
 * You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 * 
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * 
 * Constraints:
 * a. 1 <= nums.length <= 105
 * b. -104 <= nums[i] <= 104
 * c. 1 <= k <= nums.length
 */

// Time Limit Exceed in LeetCode
var maxSlidingWindow1 = function(nums, k) {
  const results = [];
  let start = 0, end = k-1;
  while(end < nums.length) {
    let tempMax = Number.MIN_SAFE_INTEGER;
    for (let i = start; i <= end; i++) {
      tempMax = Math.max(tempMax, nums[i]);
    }
    results.push(tempMax);
    start++;
    end++;
  }
  console.log(results);
  return results;
};

var maxSlidingWindow = function(nums, k) {
  const queue = [];
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    while(queue.length && nums[queue[queue.length-1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);
    if (queue[0] === i - k) {
      queue.shift();
    }
    if (i >= k - 1) {
      results.push(nums[queue[0]]);
    }
  }
  console.log(results);
  return results;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
// maxSlidingWindow([1], 1);