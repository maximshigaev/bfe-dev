/**
 * @returns { {count: number}}
 */

function createCounter() {
  return {
    get count() {
      return this._count++;
    },
    _count: 0,
  };
}

const counter = createCounter()
console.log(counter.count); // 0, then it should increment
console.log(counter.count); // 1
console.log(counter.count); // 2
counter.count = 100 // it cannot be altered
console.log(counter.count); // 3
