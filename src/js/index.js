import '@/sass/index.scss';
import HeaderClass from './classes/HeaderClass';
import AccordionClass from './classes/AccordionClass';

class App {
  constructor(config) {
    if (typeof config === 'object') {
      Object.keys(config).forEach(key => {
        this[key] = config[key];
      });
    }

    this.init();
  }

  init() {
    setTimeout(() => {
      new HeaderClass();
      new AccordionClass();
    }, 0);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
