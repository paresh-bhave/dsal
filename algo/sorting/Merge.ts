
export function Merge(array: Array<number>): void {
  
  const merge = (_array: Array<number>, left: number, middle: number, right: number) => {
    const leftSize = middle - left + 1;
    const rightSize = right - middle;

    // const arrayLeft = copy(_array, leftSize, left, 1);
    // const arrayRight = copy(_array, rightSize, middle);

    // create auxiliary array & copy elements
    const arrayLeft = new Array(leftSize);
    const arrayRight = new Array(rightSize);

    // copy left elements
    for (let i = 0; i < leftSize; i++) {
      arrayLeft[i] = _array[left + i];
    }

    // copy right elements
    for (let i = 0; i < leftSize; i++) {
      arrayRight[i] = _array[middle + i + 1];
    }

    // i, j = initial indexes of the subArrays
    // k = initial index of the merged array
    let i = 0, j = 0, k = left;
    
    // compare the elements from the right and left subarray
    // replace the array[k] with smaller
    while(i < leftSize && j < rightSize) {
      if (arrayLeft[i] <= arrayRight[j]) {
        _array[k] = arrayLeft[i];
        i++;
      } else {
        _array[k] = arrayRight[j];
        j++;
      }
      k++;
    }
    
    // Copy remaining elements of left if any
    while (i < leftSize) {
      _array[k] = arrayLeft[i];
      i++;
      k++;
    }
    
    // Copy remaining elements of right if any
    while (j < rightSize) {
      _array[k] = arrayRight[j];
      j++;
      k++;
    }
  };
  
  const sort = (_array: Array<number>, left: number, right: number) => {
    if (left < right) {
      let middle = Math.floor((left + right) / 2);
      sort(_array, left, middle);
      sort(_array, middle + 1, right);
      merge(_array, left, middle, right);
    }
  }
  
  sort(array, 0, array.length-1);
}


const array = [5,4,3,2,1,0];
console.log("ARRAY BEFORE SORT");
console.log(array);

console.log("\nARRAY AFTER SORT");
Merge(array);
console.log(array);