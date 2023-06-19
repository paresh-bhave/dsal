
/**
 * Complexity: O(N)
 * @param elements 
 * @param element 
 * @returns 
 */
export function Linear(elements: Array<any>, element: any): number {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === element) {
      return i;
    }
  }
  return -1;
}

const array = [780, 850, 956, 995, 10, 13, 15, 26, 28, 50, 56, 88, 94, 127, 159, 356, 480, 567, 689, 699, -1];
const foundIndex = Linear(array, -1);
console.log(`Element found at elements[${foundIndex}]`, array[foundIndex]);