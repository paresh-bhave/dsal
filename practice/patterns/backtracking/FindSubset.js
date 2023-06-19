
/**
 * Finding Subsets
 * 
 * Given a string, find all subsets of the given string
 * 
 * Input: "abc"
 * Output: ["","a","b,"c","ab","ac","bc","abc"]
 */

const findSubset = function(input) {
  const results = [];

  const backtrack = (subset, index) => {
    results.push(subset);
    for (let i = index; i < input.length; i++) {
      backtrack(subset + input[i], i + 1);
    }
  }

  backtrack("",0);
  return results;
}

console.log(findSubset("abc"));