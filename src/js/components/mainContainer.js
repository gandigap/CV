import create from './create';
import TabsContainer from './tabs';

export default class MainContainer {
  constructor() {
    const wrapper = document.querySelector('.wrapper');
    this.main = create('main', 'main',
      '',
      wrapper);
    this.tabsContainer = new TabsContainer();
  }
}
