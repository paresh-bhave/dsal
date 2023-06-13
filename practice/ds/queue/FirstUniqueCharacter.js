/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

/**
 * Using Queue
 * @param {string} s
 * @return {number}
 */
var firstUniqCharUsingQ = function(s) {
  const queue = [];
  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
    queue.push(char);

    while (queue.length > 0 && charCount[queue[0]] > 1) {
      queue.shift();
    }
  }

  if (queue.length === 0) {
    return -1;
  }

  return s.indexOf(queue[0]);
};

/**
 * Using HashMap
 * @param {*} s 
 * @returns 
 */
var firstUniqChar = function(s) {
  let map = {}, q = [];

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]]++;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
};

console.log(firstUniqCharUsingQ("leetcode"));
console.log(firstUniqCharUsingQ("loveleetcode"));
console.log(firstUniqCharUsingQ("aabb"));
console.log(firstUniqCharUsingQ("a"));