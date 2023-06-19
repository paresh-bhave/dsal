
export function Insertion(elements: Array<number>): void {
  let lastSortedElement, j;

  for (let i = 1; i < array.length; i++) {
    lastSortedElement = array[i];
    
    j = i - 1;
    while(j >= 0 && array[j] > lastSortedElement) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = lastSortedElement;
  }
}

const array = [780, 850, 956, 995, 10, 13, 15, 26, 28, 50, 56, 88, 94, 127, 159, 356, 480, 567, 689, 699, -1, -5];
console.log("ARRAY BEFORE SORT");
console.log(array);

console.log("\nARRAY AFTER SORT");
Insertion(array);
console.log(array);