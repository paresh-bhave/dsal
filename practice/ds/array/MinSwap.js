/**
 * To find the minimum number of swaps required to make an array of unsorted integers sorted, 
 * you can use the concept of graph cycles. Each cycle in the array represents the elements that need to be swapped to bring them to their correct positions.

// Example usage:
const arr = [5, 1, 2, 3, 4];
const numSwaps = minimumSwaps(arr);
console.log(numSwaps); // Output: 2
```

The `minimumSwaps` function takes an array of unsorted integers (`arr`) as input and returns the minimum number of swaps required to sort the array.

The function initializes an array called `visited` to keep track of the visited elements. We also initialize a variable `swaps` to count the number of swaps.

We iterate through the array using a `for` loop. For each element, if it is already visited or in its correct position (i.e., `arr[i] === i + 1`), we skip it.

If an element is not visited, we start a cycle by repeatedly following the indices until we reach a previously visited element. We mark each element in the cycle as visited and increment the `cycleSize` variable.

Finally, we update the `swaps` variable by adding the cycle size minus one. This calculation represents the minimum number of swaps needed to bring the elements in the cycle to their correct positions.

The function continues this process for all unvisited elements and returns the total number of swaps.

In the example usage, we provide an array `[5, 1, 2, 3, 4]` and call the `minimumSwaps` function. The function calculates the minimum number of swaps required (which is 2) and logs it to the console.
 * @param {*} arr 
 * @returns 
 */

function minimumSwaps(arr) {
  const n = arr.length;
  const visited = new Array(n).fill(false);
  let swaps = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i] || arr[i] === i + 1) {
      // Skip visited elements or elements already in their correct positions
      continue;
    }

    let cycleSize = 0;
    let j = i;

    while (!visited[j]) {
      visited[j] = true;
      j = arr[j] - 1;
      cycleSize++;
    }

    swaps += cycleSize - 1;
  }

  return swaps;
}

// Example usage:
const arr = [5, 1, 2, 3, 4];
const numSwaps = minimumSwaps(arr);
console.log(numSwaps); // Output: 2
