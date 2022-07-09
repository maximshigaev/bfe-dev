
// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

function curry(fn) {
  return function func(...args) {
    if (fn.length <= args.length) {
      return fn(...args);
    } else {
      return (...partialArgs) => func(...args, ...partialArgs);
    }
  }
}

const join = (a, b, c, d, e, f) => {
  return `${a}_${b}_${c}_${d}_${e}_${f}`;
}

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3, 4, 5, 6)); // '1_2_3_4_5_6'

console.log(curriedJoin(1)(2, 3)(4)(5)(6)); // '1_2_3_4_5_6'

console.log(curriedJoin(1, 2)(3)(4)(5)(6)); // '1_2_3_4_5_6'

console.log(curriedJoin(1)(2)(3)(4)(5)(6)); // '1_2_3_4_5_6'
