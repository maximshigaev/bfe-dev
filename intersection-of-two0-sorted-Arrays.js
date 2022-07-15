/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */

function intersect(arr1, arr2) {
  const result = [];
  let leftBorder = 0;

  outer: for (let i = 0; i < arr1.length; i++) {
    for (let j = leftBorder; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        leftBorder++;
        continue outer;
      }

      if (arr2[j] > arr1[i]) {
        continue outer;
      }
    }
  }

  return result;
}

console.log(intersect(
  [1,2,2,3,4,4],
  [2,2,4,5,5,6,2000]
));
// [2,2,4]
