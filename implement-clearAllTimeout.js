const timerIds = [];
const originalSetTimeout = window.setTimeout;

window.setTimeout = function(callback, delay) {
  const timerId = originalSetTimeout(callback, delay);
  timerIds.push(timerId);
  return timerId;
}

const clearAllTimeout = () => {
  timerIds.forEach(clearTimeout);
}

setTimeout(() => console.log(1), 1000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(3), 3000);

clearAllTimeout();
