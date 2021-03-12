import create from './create';

export default class SkillsTabContent {
  constructor() {
    const skillsContainer = document.querySelector('#skills');
    this.main = create('ul', 'skills',
      `<li>
          <span>Code:</span>
          <p>JS, CSS , HTML, Bootstrap, Sass, Webpack, Java</p>
        </li>
        <li>
          <span>Software: </span>
          <p>VS code , IntelliJ IDEA , Visual Studio IDE, Photoshop, Figma, Illustrator</p>
        </li>
        <li>
          <span>DB: </span>
          <p>MS Access, MySQL</p>
        </li>
        <li>
          <span>VCS: </span>
          <p>Git</p>
        </li>`,
      skillsContainer);
  }
}
