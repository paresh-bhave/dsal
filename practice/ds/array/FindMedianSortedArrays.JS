/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const findMedian = (nums) => {
    if (nums.length) {
      const mid = Math.floor(nums.length / 2);
      let median = (nums.length % 2 === 0) ? (nums[mid-1] + nums[mid]) / 2 : nums[mid];
      return median.toFixed(4);
    }
    return 0;
  };

  const merged = [];
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  
  console.log(findMedian(merged));
  return findMedian(merged);
};

findMedianSortedArrays([-1,0,1,2,6,7,8,9], [-3,-2,3,4,5,10,11,12]);
findMedianSortedArrays([1,2],[3,4]);
findMedianSortedArrays([1,3],[2]);
findMedianSortedArrays([1],[2]);
findMedianSortedArrays([1],[]);
findMedianSortedArrays([],[0]);