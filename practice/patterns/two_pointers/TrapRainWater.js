/**
* https://leetcode.com/problems/trapping-rain-water/
*/

/**
* @param {number[]} height
* @return {number}
*/
var trap = function(height) {
  let leftMaxHeight = height[0], rightMaxHeight = height[height.length-1];
  let i = 0, j = height.length-1;
  
  const left = [], right = [];
  
  while(i < height.length) {
    leftMaxHeight = Math.max(height[i], leftMaxHeight);
    rightMaxHeight = Math.max(height[j], rightMaxHeight);
    left[i] = leftMaxHeight;
    right[j] = rightMaxHeight;
    i++;
    j--;
  }
  
  let trap = 0;
  for (let i = 0; i < height.length; i++) {
    trap += Math.min(left[i], right[i]) - height[i];
  }
  return trap;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);
trap([4,2,0,3,2,5]);



// Improved Version

/**
* @param {number[]} height
* @return {number}
*/
var trapImproved = function (height) {
  let l = 0, r = height.length - 1, total = 0
  let left_max = height[l], right_max = height[r]
  while (l < r) {
    if (left_max < right_max) {
      l++
      left_max = Math.max(left_max, height[l])
      total += left_max - height[l]
    } else {
      r--
      right_max = Math.max(right_max, height[r])
      total += right_max - height[r]
    }
  }
  return total
};