/**
 * @param {number[]} arr
 * @returns number
 */

function findSingle(arr) {
  return arr
    .sort((a, b) => a - b)
    .find((el, ind) => (el !== arr[ind + 1]) && (el !== arr[ind - 1]));
}

const arr = [10, 2, 2 , 1, 0, 0, 10];
console.log(findSingle(arr)); // 1
