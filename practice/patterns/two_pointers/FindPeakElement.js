/**
* https://leetcode.com/problems/find-peak-element/
*/

/**
* Consideration:
* - Array always contains at least one or more peak 
* @param {number[]} nums
* @return {number}
*/
var findPeakElement = function(nums) {
  var start = 0, end = nums.length - 1;
  while (start < end) {
    var mid = Math.floor((start + end) / 2);
    if (mid === 0) {
      return nums[0] >= nums[1] ? 0 : 1;
    }
    if (mid === end) {
      return nums[end - 1] >= nums[end - 2] ? end - 1 : end - 2;
    }
    
    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    }
    if (nums[mid] < nums[mid - 1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

// console.log(findPeakElement([1,2,3,1]));
// console.log(findPeakElement([1,2,1,3,5,6,4]));
// console.log(findPeakElement([1,2,3]));
// console.log(findPeakElement([-1,-2,-3]));
// console.log(findPeakElement([-1,0,-3]));
// console.log(findPeakElement([-1,2]));


// Variation -- Find Highest Peak Element

/**
* Consideration:
* - Array always contains at least one or more peak 
* - Array length is greater than 2
* @param {number[]} nums
* @return {number}
*/
var findPeakElement = function(nums) {
  let n = nums.length, largestIndex = -1;
  for (let i = 1; i <= n-2;) {
    if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
      let count = 1, j = i;
      largestIndex = i;
      while (j >= 1 && nums[j] > nums[j-1]) {
        j--;
        count++;
      }
      while (i <= n-2 && nums[i] > nums[i+1]) {
        i++;
        count++;
      }
    } else {
      i++;
    }
  }
  return largestIndex;
};

console.log(findPeakElement([5,6,1,2,3,4,5,4,3,2,1,0,-2,4]));