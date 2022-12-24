import templates from './templates/index.js';

export const createWidget = ({selector}) => {
  const tempWrapper = document.querySelector(selector);
  tempWrapper.innerHTML = templates;
};
