/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */

async function all(promises) {
  if (!promises.length) {
    return [];
  }

  const result = [];

  try {
    for await (let value of promises) {
      result.push(value);
        if (result.length === promises.length) {
          return Promise.resolve(result);
        }
    }
  } catch (err) {
    return Promise.reject(err);
  }
}

const promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  4,
  new Promise((_, reject) => setTimeout(() => reject(new Error('error')), 4000)),
];

console.log(all(promises).then(
  (res) => console.log(res, 'res'),
  (err) => console.log(err, 'err'),
));
