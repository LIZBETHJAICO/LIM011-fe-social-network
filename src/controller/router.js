import { components } from '../view/index.js';

export const changeView = (hash) => {
  const container = document.querySelector('#container');
  switch (hash) {
    case '':
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/register':
      container.appendChild(components.register());
      break;
    default:
      break;
  }
};
