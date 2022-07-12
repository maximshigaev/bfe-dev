/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */

function race(promises) {
  return new Promise((res, rej) => {
    promises.forEach((promise) => {
      promise
        .then((value) => res(value))
        .catch((error) => rej(error));
    })
  });
}
