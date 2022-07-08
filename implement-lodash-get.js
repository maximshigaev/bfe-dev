/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */

function get(source, path, defaultValue = undefined) {
  if (!path.length) {
    return defaultValue;
  }

  const paths = Array.isArray(path)
    ? path
    : path
        .replace(']', '')
        .replace('[', '.')
        .split('.');
  let result = source;

  paths.forEach((el) => {
    result = result[el];
  });

  return (result === undefined)
    ? defaultValue
    : result;
}

const obj = {
  a: {
    b: {
      c: [1,2,3],
    },
  },
}

console.log(get(obj, 'a.b.c')); // [1,2,3]
console.log(get(obj, 'a.b.c.0')); // 1
console.log(get(obj, 'a.b.c[1]')); // 2
console.log(get(obj, ['a', 'b', 'c', '2'])); // 3
console.log(get(obj, 'a.b.c[3]')); // undefined
console.log(get(obj, 'a.c', 'bfe')); // 'bfe'
