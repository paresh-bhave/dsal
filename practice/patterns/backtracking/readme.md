# Backtracking

The Backtracking pattern is a general algorithmic approach used to solve problems that involve searching for possible solutions by exploring all potential candidates. It is particularly useful when the problem has constraints or conditions that allow us to discard certain candidates early in the search process, thereby reducing the search space.

The Backtracking pattern follows a recursive approach. It explores all possible choices, one at a time, and keeps track of the current state of the exploration. If a choice leads to an invalid solution, it backtracks and tries another choice until a valid solution is found or all possibilities have been exhausted.

Here's an example problem that can be solved using the Backtracking pattern:

Problem: Generate all possible permutations of a given set of distinct integers.

Example:
Input: [1, 2, 3]
Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

To solve this problem using the Backtracking pattern, we can follow these steps:

1. Initialize an empty array to store the permutations.
2. Create a recursive backtracking function that takes the current permutation, the remaining numbers, and the set of visited indices as parameters.
3. If the current permutation has the same length as the input array, add it to the result array and return.
4. Iterate through each index in the remaining numbers:
   - If the index is already visited, skip it.
   - Add the number at the current index to the current permutation.
   - Mark the index as visited.
   - Recursively call the backtracking function with the updated permutation, remaining numbers, and visited indices.
   - Backtrack by removing the number from the current permutation and marking the index as unvisited.
5. Return the resulting array of permutations.

Here's a template code in JavaScript to solve the permutation problem using the Backtracking pattern:

```javascript
function generatePermutations(nums) {
  const result = [];

  function backtrack(permutation, remaining, visited) {
    if (permutation.length === nums.length) {
      result.push(permutation.slice());
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      if (visited[i]) {
        continue;
      }

      permutation.push(remaining[i]);
      visited[i] = true;
      backtrack(permutation, remaining, visited);
      permutation.pop();
      visited[i] = false;
    }
  }

  backtrack([], nums, Array(nums.length).fill(false));
  return result;
}

// Example usage:
const nums = [1, 2, 3];
const permutations = generatePermutations(nums);
console.log(permutations);
```

In this code, the `generatePermutations` function serves as the entry point to the backtracking algorithm. It initializes an empty array to store the result and calls the `backtrack` function with the initial parameters.

The `backtrack` function is the recursive backtracking function that explores all possible permutations. It takes the current permutation, the remaining numbers, and the visited indices as parameters. It follows the steps mentioned earlier to generate all permutations by making choices, exploring, and backtracking.

In the example usage, we generate all permutations of the array `[1, 2, 3]` using the `generatePermutations` function and print the result.

Note that the Backtracking pattern can be applied to various other problems that involve searching for valid solutions, such as generating combinations, solving Sudoku puzzles, and solving the N-Queens problem. The specific implementation may vary depending on the problem requirements, but the underlying principles of backtracking remain the same.