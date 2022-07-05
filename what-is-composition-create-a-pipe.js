
/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */

function pipe(funcs) {
	return (arg) => {
    if (!funcs.length) {
      return arg;
    }
    
    return funcs.reduce((acc, cur, index) => !index ? acc : cur(acc), funcs[0](arg));
  }
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const composed = pipe([
  times(2),
  subtract(3),
  divide(4)
]);

console.log(composed(10));
