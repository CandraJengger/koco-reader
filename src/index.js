import {WIDGET_POSITION} from './constants/index.js';
import {$} from './helpers/selector.js';
import templates, {init} from './templates/index.js';

export const createWidget = ({
  position = WIDGET_POSITION.Fixed,
  selector = ''
  // optionFixed = {
  //   direction: 'right-bottom'
  // }
}) => {
  const templateHTML = templates();

  if (position === WIDGET_POSITION.Inline && selector) {
    const tempWrapper = $(selector);
    tempWrapper.innerHTML = templateHTML;

    init();
    return;
  }

  if (position === WIDGET_POSITION.Fixed) {
    const bodyElem = $('body');
    const wrapper = document.createElement('span');
    wrapper.innerHTML = templateHTML;
    bodyElem.append(wrapper);

    init();
    return;
  }
};
