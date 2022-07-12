/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */

function sort(items, newOrder) {
  const copy = items.slice();

  newOrder.forEach((newIndex, oldIndex) => items[newIndex] = copy[oldIndex]);
}

const A = ['A', 'B', 'C', 'D', 'E', 'F'];
const B = [1,   5,   4,   3,   2,   0];

sort(A, B);

console.log(A, 'A');
