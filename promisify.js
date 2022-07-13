/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */

function promisify(func) {
  return function(...args) {
    return new Promise((res, rej) => {
      const callback = (error, data) => {
        if (error) {
          rej(error);
        } else {
          res(data);
        }
      }
      func.call(this, ...args, callback);
    });
  }
}
