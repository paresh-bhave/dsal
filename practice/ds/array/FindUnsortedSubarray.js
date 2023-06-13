/**
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1] || nums[i] < nums[i-1]) {
      min = Math.min(min, nums[i]);
      max = Math.max(max, nums[i]);
    }
  }

  if (min == Infinity) return 0;
  
  let left = 0;
  
  while(min >= nums[left]) left++;
  
  let right = nums.length-1;
  while(max <= nums[right]) right--;

  // console.log(left, right, Math.abs(right-left));
  return (right - left) + 1;
};

console.log(findUnsortedSubarray([1,2,3,4,5,8,7,6,9,10,11]));

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));

console.log(findUnsortedSubarray([1,2,3,4,5]));

console.log(findUnsortedSubarray([1]));

console.log(findUnsortedSubarray([-4,-3,-1,-2,0,1,2]));
