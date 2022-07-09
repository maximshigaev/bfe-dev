
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */

function getHeightRecursive(tree) {
  if (!tree) {
    return 0;
  }

  let currentRecursionDepth = 0;
  let maxRecursionDepth = 0;

  const traverse = (subtree) => {
    currentRecursionDepth++;

    if (!subtree.children.length) {
      maxRecursionDepth = Math.max(maxRecursionDepth, currentRecursionDepth);
      currentRecursionDepth--;
      return;
    }

    for (let i = 0; i < subtree.children.length; i++) {
      traverse(subtree.children[i]);
    }

    currentRecursionDepth--;
  }

  traverse(tree);

  return maxRecursionDepth;
}

function getHeightIterative(tree) {
  if (!tree) {
    return 0;
  }

  let current = tree;

  const queue = [{
    element: tree,
    nestingLevel: 1,
  }];
  
  while (queue.length) {
    current = queue.shift();

    const mappedChildren = Array.from(current.element.children).map((el) => ({
      element: el,
      nestingLevel: current.nestingLevel + 1,
    }))

    queue.push(...mappedChildren);
  }

  return current.nestingLevel;
}

const root = document.body.firstElementChild;
console.log(getHeightRecursive(root));
console.log(getHeightIterative(root));
