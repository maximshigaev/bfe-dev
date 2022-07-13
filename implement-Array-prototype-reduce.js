Array.prototype.myReduce = function(func, initialValue) {
  let result = initialValue ?? this[0];
  let startIndex = (initialValue === undefined)
    ? 1
    : 0;

  for (let i = startIndex; i < this.length; i++) {
    result = func(result, this[i]);
  }

  return result;
}

console.log([1,2,3,4].myReduce((sum, item) => sum + item, 0));
// 6
