
/**
 * Assumption: Array is sorted
 * 
 * Complexity: 
 *  1. If Array is already sorted: O(Log N)
 *  2. If Array is not sorted, then complexity depends upong the sorting algorithm, such as:
 *    a. Efficient sorting algorithm like MergeSort:  O(n log(n))
 *    b. Inefficience  sorting algorithm like Insertion: O(n^2)
 * @param array 
 * @param item 
 * @returns index
 */
export function Binary(array: Array<any>, item: any): number {
  let left = 0, right = array.length - 1;

  while(left <= right) {
    const mid: number = Math.ceil((left + right) / 2);

    if (array[mid] === item) return mid;
    else if (item < array[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

const array = [780, 850, 956, 995, 10, 13, 15, 26, 28, 50, 56, 88, 94, 127, 159, 356, 480, 567, 689, 699, -1, -5];
const foundIndex = Binary(array, -1);
console.log(`Element found at elements[${foundIndex}]`, array[foundIndex]);