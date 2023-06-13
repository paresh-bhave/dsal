/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
    } else {
      i = map.get(s[i]);
      map.clear();
    }
    longest = longest < map.size ? map.size : longest;
  }
  console.log(longest);
  return longest;
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbb");
lengthOfLongestSubstring("pwwkew");