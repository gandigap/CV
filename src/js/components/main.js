import create from './create';
import HeaderContainer from './headerContaiter';
import MainContainer from './mainContainer';

class Main {
  constructor() {
    const body = document.querySelector('body');
    this.wrapper = create('div', 'wrapper', '', body);
    this.header = new HeaderContainer();
    this.main = new MainContainer();
  }
}

const main = new Main();
window.main = main;
