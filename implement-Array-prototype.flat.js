
// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

function flat(arr, depth = 1) {
  const result = [];

  arr.forEach((item) => {
    if ((depth === 0) || (!Array.isArray(item))) {
      result.push(item);
    } else {
      result.push(...flat(item, depth - 1));
    }
  });

  return result;
}

const arr = [1, [2], [3, [4, [5]]]];

console.log(flat(arr));
// [1, 2, 3, [4, [5]]]

console.log(flat(arr, 1));
// [1, 2, 3, [4, [5]]]

console.log(flat(arr, 2));
// [1, 2, 3, 4, [5]]

console.log(flat(arr, 3));
// [1, 2, 3, 4, 5]
