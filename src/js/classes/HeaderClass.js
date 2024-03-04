import { FLOATING_CLASS, DOWN_CLASS } from '../utils/constants';

const HEADER_SELECTOR = 'js-header';

export default class HeaderClass {
  constructor(config) {
    if (typeof config === 'object') {
      Object.keys(config).forEach(key => {
        this[key] = config[key];
      });
    }

    this.oldWindowPosition = window.scrollY;
    this.header = document.querySelector(`.${HEADER_SELECTOR}`);

    this.init();
  }

  init() {
    this.switchFloatMode();

    document.addEventListener('scroll', () => {
      this.switchFloatMode();
    });
  }

  switchFloatMode() {
    if (!this.header) return;

    const position = this.header.getBoundingClientRect().top + window.scrollY;

    if (window.scrollY > position) {
      this.header.classList.add(FLOATING_CLASS);

      this.switchDownMode();

      return;
    }

    this.header.classList.remove(FLOATING_CLASS, DOWN_CLASS);
  }

  switchDownMode() {
    if (!this.header) return;

    const down = this.scrollDownCalculate();

    if (down) {
      this.header.classList.add(DOWN_CLASS);

      return;
    }

    this.header.classList.remove(DOWN_CLASS);
  }

  scrollDownCalculate() {
    const down = !(this.oldWindowPosition > window.scrollY);
    this.oldWindowPosition = window.scrollY;

    return down;
  }
}
