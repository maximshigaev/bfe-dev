Array.prototype.myMap = function(mapperFn, self) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(mapperFn.call(self, this[i], i, this));
  }

  return result;
}

console.log([1, 2, 3, 4, 5].myMap(
  function (el) {
    return el * 3 * this.a;
  },
  { a: 5 },
));
