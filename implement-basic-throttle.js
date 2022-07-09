// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */

function throttle(func, wait) {
  let isFreezed = false;
  let lastArgs;

  return function(...args) {
    if (isFreezed) {
      lastArgs = args;
      return;
    }

    isFreezed = true;

    func.apply(this, args);

    setTimeout(() => {
      isFreezed = false;

      if (lastArgs) {
        func.apply(this, lastArgs);
        lastArgs = null;
      }
    }, wait);
  }
}

const test = function(arg) {
  console.log(arg, 'arg');
}

const throttled = throttle(test, 3000);

throttled(1);
setTimeout(() => throttled(2), 1000);
setTimeout(() => throttled(3), 2900);
setTimeout(() => throttled(4), 3100);
setTimeout(() => throttled(5), 6100);
