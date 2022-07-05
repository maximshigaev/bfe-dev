/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */

function memo(func, resolver) {
  const cashe = new Map();

  return function(...args) {
    const key = resolver
      ? resolver(...args)
      : args.join('');

    if (cashe.has(key)) {
      return cashe.get(key);
    } else {
      const result = func.apply(this, args);
      cashe.set(key, result);

      return result;
    }
  }
}

const func = (arg1, arg2) => {
  console.log(arg1, arg2, 'args');
  return arg1 + arg2
}

const memoed = memo(func)

console.log(memoed(1, 2)); 
console.log(memoed(1, 2)); 
console.log(memoed(1, 3));
console.log(memoed(1, 3));
