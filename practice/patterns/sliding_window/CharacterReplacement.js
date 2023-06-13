/**
* https://leetcode.com/problems/longest-repeating-character-replacement/
*/

/**
* @param {string} s
* @param {number} k
* @return {number}
*/
var characterReplacement = function(s, k) {
  const map = {};
  let highest = 0, longest = 0, start = 0, end = 0
  while (end < s.length) {
    const next = s[end];
    map[next] = (map[next] + 1) || 1;
    highest = Math.max(highest, map[next]);
    while ((end - start + 1) - highest > k) {
      const prev = s[start];
      map[prev] -= 1;
      start++;
    }
    longest = Math.max(longest, end - start + 1);
    end++;
  }
  return longest;
};

// characterReplacement("AABABBA", 1);
characterReplacement("ABAB", 2);