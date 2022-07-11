/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */

function any(promises) {
  if (!promises || !promises.length) {
    throw new AggregateError('No Promise was provided')
  }

  let counter = 0;
  const errors = [];

  return new Promise((resolve, reject) => {
    promises.forEach((promise, ind) => {
      Promise.resolve(promise).then(
        (result) => resolve(result),
        (err) => {
          errors[ind] = err;
          counter++;
          if (counter === promises.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
}

const promises = [
  // new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  // new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  // new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('error5')), 4000)),
];

any(promises)
  .then((res) => console.log(res, 'res'))
  .catch((err) => console.log(err.errors, 'err.errors'));
