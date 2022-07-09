/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */

const findCorrespondingNode = (rootA, rootB, target) => { 
  const childIndexes = [];
  let child = target;
  let parent = target.parentElement;
  let result = rootB;

  while (child !== rootA) {
    childIndexes.push(Array.from(parent.children).indexOf(child));
    child = parent;
    parent = parent.parentElement;
  }

  for (let i = childIndexes.length - 1; i >= 0; i--) {
    result = result.children[childIndexes[i]];
  }

  return result;
}

const target = document.querySelector('.target');
const rootA = document.body.firstElementChild;
const rootB = document.body.children[1];

console.log(findCorrespondingNode(rootA, rootB, target));
