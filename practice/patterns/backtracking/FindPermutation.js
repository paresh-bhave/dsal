/**
 * Find all permutation of a given string
 * 
 * Permutation: N!
 * N = string.length or array.length
 * 
 * Input: "abc" --> s.length => 3
 * Output: ["abc", "bac", "cab", "acb", "bca", "cba"]
 */

const findPermutation = function(input) {
  const permutations = [];
  const used = new Array(input.length).fill(false); // keep the track

  const backtrack = (combination) => {
    // base case
    // exhausted after all the possible combination
    if (combination.length === input.length) {
      permutations.push(combination);
      return;
    }

    for (let i = 0; i < input.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      backtrack(combination + input[i]);
      used[i] = false;
    }
  }

  backtrack("");
  return permutations;
}

// console.log(findPermutation("abc"));


const findPermutationNumeric = function(input) {
  const permutations = [];
  const used = new Array(input.length).fill(false); // keep the track

  const backtrack = (combination) => {
    // base case
    // exhausted after all the possible combination
    if (combination.length === input.length) {
      permutations.push(combination);
      return;
    }

    for (let i = 0; i < input.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      backtrack([...combination, input[i]]);
      used[i] = false;
    }
  }

  backtrack([]);
  return permutations;
}

console.log(findPermutationNumeric([1,2,3]));