
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */

function debounce(func, wait) {
  let timeoutId;

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => func.apply(this, args), wait);
  }
}

const test = function() {
  console.log(this);
}

const debounced = debounce(test, 3000);
const obj = {
  a: debounced, 
}

obj.a();
