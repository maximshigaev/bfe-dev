
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */

function allSettled(promises) {
  if (!promises.length) {
    return Promise.resolve([]);
  }

  const result = [];

  return new Promise((resolve) => {
    promises.forEach((promise, ind) => {
      Promise.resolve(promise)
        .then(
          (res) => {
            result[ind] = {
              status: 'fulfilled',
              value: res,
            };
          },
          (err) => {
            result[ind] = {
              status: 'rejected',
              reason: err,
            };
          }
        )
        .finally(() => {
          if (result.length === promises.length) {
            resolve(Promise.resolve(result));
          }
        })
    });
  });
}

const promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  4,
  new Promise((_, reject) => setTimeout(() => reject(new Error('error')), 4000)),
];

console.log(allSettled(promises).then(
  (res) => console.log(res, 'res'),
  (err) => console.log(err, 'err'),
));
