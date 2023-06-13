
function Binary(elements: Array<any>, element: any): number {
  let left = 0, right = elements.length - 1;

  while(left <= right) {
    const mid: number = Math.ceil((left + right) / 2);

    if (elements[mid] === element) return mid;
    else if (element < elements[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

console.log(Binary([1,2,3,4,5,6,7,8,9,10], 8));