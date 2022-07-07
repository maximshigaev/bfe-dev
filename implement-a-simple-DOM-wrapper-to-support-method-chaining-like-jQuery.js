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

$('#button')
  .css('color', '#fff')
  .css('backgroundColor', '#000')
  .css('fontWeight', 'bold')
