import { MEDIA, ACTIVE_CLASS } from '../utils/constants';


const MENU_SELECTOR = 'js-menu';
const MENU_HEAD_SELECTOR = 'js-menu-head';
const MENU_LIST_SELECTOR = 'js-menu-list';

export default class AccordionClass {
  constructor(config) {
    if (typeof config === 'object') {
      Object.keys(config).forEach(key => {
        this[key] = config[key];
      });
    }

    this.init();
  }

  init() {
    this.initAccordionMenu();
  }

  initAccordionMenu() {
    document.addEventListener('click', event => {
      const head = event.target.closest(`.${MENU_HEAD_SELECTOR}`);

      if (!head || window.innerWidth >= MEDIA.md) return;

      const menu = head.closest(`.${MENU_SELECTOR}`);

      if (!menu) return;

      const list = menu.querySelector(`.${MENU_LIST_SELECTOR}`);

      if (!list) return;

      menu.classList.toggle(ACTIVE_CLASS);
      /* toggle(list); */
    });
  }
}
