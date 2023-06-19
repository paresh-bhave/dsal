
export function Quick(array: Array<number>): void {
  
  const swap = (_array: Array<number>, from: number, to: number) => {
    let temp = _array[from];
    _array[from] = _array[to];
    _array[to] = temp;
  };

  const partition = (_array: Array<number>, low: number, high: number): number => {
    let pivot = _array[high];

    // index of the smaller element
    let i = low - 1;
    for (let j = low; j < high; j++) {
      // swap array[i] with array[j] if the current element is smaller than the pivot
      if (_array[j] < pivot) {
        i++;
        swap(_array, i, j);
      }
    }
    swap(_array, i + 1, high);
    return i + 1;
  };
  
  const sort = (_array: Array<number>, low: number, high: number) => {
    if (low < high) {
      // Place portioning index in right place
      let partitionIndex = partition(_array, low, high);

      // Recursively sort items before & after the partition
      sort(_array, low, partitionIndex - 1);
      sort(_array, partitionIndex + 1, high);
    }
  }
  
  sort(array, 0, array.length-1);
}


const array = [5,4,3,2,1,0];
console.log("ARRAY BEFORE SORT");
console.log(array);

console.log("\nARRAY AFTER SORT");
Quick(array);
console.log(array);