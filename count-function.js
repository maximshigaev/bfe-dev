function count() {
  count.counter = !count.counter
    ? 1
    : ++count.counter;

  return count.counter;
}

count.reset = function() {
  this.counter = 0;
}

console.log(count());
console.log(count());
console.log(count());

count.reset();

console.log(count());
console.log(count());
console.log(count());
