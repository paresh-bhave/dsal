
export function Bubble(array: Array<number>): void {
  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < ((array.length - i) - 1); j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
}

const array = [780, 850, 956, 995, 10, 13, 15, 26, 28, 50, 56, 88, 94, 127, 159, 356, 480, 567, 689, 699, -1, -5];
console.log("ARRAY BEFORE SORT");
console.log(array);

console.log("\nARRAY AFTER SORT");
Bubble(array);
console.log(array);