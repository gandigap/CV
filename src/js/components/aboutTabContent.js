import create from './create';

export default class AboutTabContent {
  constructor() {
    const aboutContainer = document.querySelector('#about');
    this.main = create('p', 'about',
      `Hi. My name is Ihar Berasneu. I am a purposeful, responsible and sociable person. In my free time 
      I try to learn something new and enjoy it.`,
      aboutContainer);
  }
}