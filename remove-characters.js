/**
 * @param {string} input
 * @returns string
 */

function removeChars(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 'b') {
      input = input.slice(0, i) + input.slice(i + 1);
      i--;
    }

    if ((input[i] + input[i + 1]) == 'ac') {
      input = input.slice(0, i) + input.slice(i + 2);
      i-=2;
    }
  }

  return input;
}

console.log(removeChars('ab')); // 'a'
console.log(removeChars('abc')); // ''
console.log(removeChars('cabbaabcca')); // 'caa'
