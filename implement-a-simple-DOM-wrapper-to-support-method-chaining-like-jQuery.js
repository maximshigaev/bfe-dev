/**
 * @param {HTMLElement} el - element to be wrapped
 */

function $(el) {
  function css(prop, value){
    el.style[prop] = value;

    return this;
  }

  return {
    css,
  }
}

$(document.getElementById('div'))
  .css('color', '#fff')
  .css('backgroundColor', 'red')
  .css('fontWeight', 'bold')
