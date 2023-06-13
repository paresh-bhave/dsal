/**
 * https://leetcode.com/problems/fizz-buzz/
 */

/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n: number): string[] {
  let results = [];
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) {
      str += "Fizz";
    } 
    if (i % 5 === 0) {
      str += "Buzz";
    } 
    if (i % 3 !== 0 && i % 5 !== 0){
      str = i.toString();
    }
    results.push(str);
  }
  return results;
};

// console.log(fizzBuzz(3));

// console.log(fizzBuzz(5));

console.log(fizzBuzz(15));