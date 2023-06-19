/**
 * https://leetcode.com/problems/coin-change/
 * 
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const results = new Array(amount + 1).fill(0);

  for (let i = 1; i <= amount; i++) {
    results[i] = Number.MAX_SAFE_INTEGER;
    
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (i - coin >= 0 && results[i-coin] !== Number.MAX_SAFE_INTEGER) {
        results[i] = Math.min(results[i], results[i-coin] + 1);
      }
    }
  }
  return results[amount] === Number.MAX_SAFE_INTEGER ? -1 : results[amount];
};

console.log(coinChange([1,5,7,10], 8));
console.log(coinChange([1,2,5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));