/**
 * @param {any[]} args
 * @returns {string}
 */

function classNames(...args) {
  let result = '';

  for (let i = 0; i < args.length; i++) {
    if ((typeof args[i] === 'string') || (typeof args[i] === 'number')) {
      result = result
        ? result + ' ' + args[i]
        : args[i];
      
      continue;
    }
    
    if (Array.isArray(args[i])) {
      const flattennedArr = args[i].flat();

      result = result
        ? result + ' ' + classNames(...flattennedArr)
        : classNames(...flattennedArr);
      continue;
    }

    if ((typeof args[i] === 'object') && (args[i] !== null)) {
      for (let key in args[i]) {
        if (args[i][key]) {
          result = result
            ? result + ' ' + key
            : key;
        }
      }
    }
  }

  return result;
}

console.log(classNames('BFE', 'dev', 100));
console.log(classNames(null, undefined, Symbol(), 1n, true, false));

const obj = new Map()
obj.cool = '!'

console.log(classNames({BFE: [], dev: true, is: 3}, obj));
// 'BFE dev is cool'

console.log(classNames(['BFE', [{dev: true}, ['is', [obj]]]]));
// 'BFE dev is cool'
