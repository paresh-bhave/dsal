/**
 * Problem: Along one side of the road there is a sequence of vacant plots of land.
 * Each plot has a different area (non-zero). So that areas form a sequence A[1], A[2]...A[N]
 * 
 * You want to buy K acres of land to build a house. You want to find all segments of contiguous plots. 
 * (i.e. subsection in the sequence whose sum is exactly K)
 * 
 * E.g.
 * Input: Plots = [1,3,2,1,4,1,3,2,1,1,2], K = 8
 * Sample Output = [[2,5], [4,6], [5,9]]
 * 
 * Explaination: 
 * [2,5] -> Sum of plots[2] till plots[5] => 8
 * [4,6] -> Sum of plots[4] till plots[6] => 8
 */

var findPlot = function(plots, k) {
  let sum = 0, i = 0, j = 0, results = [];

  while(j < plots.length) {
    // expand the right
    sum += plots[j];
    j++;

    // remove elements from the left till sum > k and i < j
    while(sum > k && i < j) {
      sum -= plots[i];
      i++;
    }

    // check if at any point sum matches the K
    if (sum === k) {
      results.push([i, j-1]);
    }
  }

  console.log(results);
}

findPlot([1,3,2,1,4,1,3,2,1,1,2], 8);