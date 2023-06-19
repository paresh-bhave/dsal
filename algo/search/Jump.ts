
/**
 * Requirements:
 * - Doesn't need array to be sorted
 * - Works on only positive integers
 * 
 * Complexity: 
 *  a. Best Case => O(log N)
 *  c: Worst Case => O(n)
 * @param array 
 * @param item 
 */
export function Jump(array: Array<number>, item: number): number {
  let start = 0;
  let length = array.length;
  let lengthRoot = Math.floor(Math.sqrt(length)); //the square root of array length
  let end = lengthRoot;

  while(array[end] <= item && end < length) {
    start = end;  //if it is not correct block then shift block
    end += lengthRoot;
    if (end >= length - 1) {
      end = length;
    }
  }
  console.log(start, end);

  for(let i = start; i < end; i++) { //perform linear search in the selected block
    if (array[i] === item) {
      return i; //the correct position of the key
    }
  }
  return -1;
}

const array = [780, 850, 956, 995, 10, 13, 15, 26, 28, 50, 56, 88, 94, 127, 159, 356, 480, 567, 689, 699, -1];
const foundIndex = Jump(array, -1);
console.log(`Element found at elements[${foundIndex}]`, array[foundIndex]);