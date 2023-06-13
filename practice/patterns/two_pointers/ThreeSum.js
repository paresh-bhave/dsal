/**
* https://leetcode.com/problems/3sum/description/
*/

/**
 * Approach 1: Using Map 
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function(nums) {
  const results = {};
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1, k = nums.length - 1;
    while(j < k) {
      let sum = nums[i] + nums[j] + nums[k]; 
      if (sum === 0) {
        let key = `key_${nums[i]}_${nums[j]}_${nums[k]}`;
        results[key] = [nums[i], nums[j], nums[k]];
        j++;
        k--;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return [...Object.values(results)];
};

/**
 * * Approach 1: Using extra space
 * @param {*} nums 
 * @returns 
 */
var threeSum2 = function(nums) {
  if (nums.length < 3) return [];
  const result = [];
  for (let idx = 0; idx <= nums.length - 1 - 2; idx++) {
    if (idx > 0 && nums[idx] === nums[idx - 1]) continue;
    
    nums.sort((a, b) => a - b);
    
    let l = idx + 1;
    let r = nums.length - 1;
    
    while (l < r) {
      const sum = nums[idx] + nums[l] + nums[r];
      
      if (sum > 0) {
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        result.push([nums[idx], nums[l], nums[r]]);
        
        while (nums[l] === nums[l + 1]) l += 1;
        while (nums[r] === nums[r - 1]) r -= 1;
        
        l += 1;
        r -= 1;
      }
    }
  }
  return result;
};
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));
