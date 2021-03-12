import create from './create';
import AboutTabContent from './aboutTabContent';
import SkillsTabContent from './skillsTabContent';
import ProjectsTabContent from './projectsTabContent';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class TabsContainer {
  constructor() {
    const wrapper = document.querySelector('.main');
    this.main = create('div', 'tabs__container',
      `<ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true">About</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Skills</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects" type="button" role="tab" aria-controls="projects" aria-selected="false">Projects</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab"></div>
        <div class="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab"></div>
        <div class="tab-pane fade" id="projects" role="tabpanel" aria-labelledby="projects-tab"></div>
      </div>`,
      wrapper);
    this.aboutTabContent = new AboutTabContent();
    this.skillsTabContent = new SkillsTabContent();
    this.projectsTabContent = new ProjectsTabContent();
  }
}
