/**
 * @param {number[]} arr
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

const array = [1, 10, 2, 9 ,3, 8, 4, 7, 5, 6];

bubbleSort(array);

console.log(array);
