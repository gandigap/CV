import create from './create';
import arrayIcons from './svgImages';

export default class HeaderContainer {
  constructor() {
    this.arrayIcons = arrayIcons;
    const wrapper = document.querySelector('.wrapper');
    this.header = create('header', 'header',
      `
      <h2 class="header__title">FRONTEND DEVELOPER</h2>
      <div class="header__contacts">          
      </div>
      <figure class="header__logo">
        <img class="logo" src="images/content/logo.svg" alt="">
      </figure>`,
      wrapper);
    this.addIcons();
  }

  addIcons() {
    const headerContacts = document.querySelector('.header__contacts');
    this.arrayIcons.forEach((element) => {
      create('a', 'header__contacts__link', `${element}`, headerContacts);
    });
  }
}
