// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {string[][]} message
 * @return {string}
 */

function decode(message) {
  let result = '';
  let i = 0;
  let j = 0;

  const goLeftTopToRightBottom = () => {
    while ((i < message.length) && (j < message[i].length)) {
      result+=message[i][j];
      i++;
      j++;
    }
  }

  goLeftTopToRightBottom();

  i-=2;

  while ((i >= 0) && (j < message[i].length)) {
    result+=message[i][j];
    i--;
    j++;
  }
  
  i+=2;

  goLeftTopToRightBottom();

  return result;
}

const input = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D'] 
];

console.log(decode(input));
