/**
* https://leetcode.com/problems/next-greater-element-i
*/

/*
 Approach:  
 - Iterate through nums2
 - Keep pushing elements in a stack
 - Whenever the last element of the stack is lesser than the current element nums2[i], 
  then keep popping out the element from the stack and mark the current element nums2[i] as the next greater element for them. 
  We can use hashmap to store this info, as the elements are unique.  
*/

var nextGreaterElement = function(nums1, nums2) {
  let stack = [], map = {}, max = -1, element, ans = [];
  for(let i = 0; i < nums2.length; i++) {
    while(stack[0] !== undefined && stack[stack.length-1] < nums2[i]) {
      element = stack.pop();
      map[element] = nums2[i];
    }
    stack.push(nums2[i]);
  }

  for(let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] === undefined) {
      ans.push(-1);
    } else {
      ans.push(map[nums1[i]]);
    }
  }
  return ans;
};