
/**
 * 
 * @param array 
 */
export function Selection(array: Array<number>): void {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      let temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
}

const array = [780, 850, 956, 995, 10, 13, 15, 26, 28, 50, 56, 88, 94, 127, 159, 356, 480, 567, 689, 699, -1, -5];
console.log("ARRAY BEFORE SORT");
console.log(array);

console.log("\nARRAY AFTER SORT");
Selection(array);
console.log(array);