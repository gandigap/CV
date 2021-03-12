
import create from './create';
// import Swiper styles

import 'swiper/swiper-bundle.css';

export default class ProjectsTabContent {
  constructor() {
    this.projectsContainer = document.querySelector('#projects');
    this.slider = create('div', '.projects', `
    <div id="carouselExampleControls" class="carousel slide" ride="false" wrap="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <a class="project__link" href="" target="_blank">
          <figure>
            <img class="image-project" src="images/content/shelter.jpg" alt="Shelter">
            <figcaption class="title-project">Shelter</figcaption>          
          </figure>
        </a>        
        <p class="description-project">Site for animal nursery. Slider, burger menu, pagination and pop-ups work.
              Pixel perfect layout</p>
      </div>
      <div class="carousel-item">
        <a class="project__link" href="" target="_blank">
          <figure>
            <img class="image-project" src="images/content/virtual-keyboard.jpg" alt="Virtual keyboard">
            <figcaption class="title-project">Virtual keyboard</figcaption>          
          </figure>
        </a>        
        <p class="description-project">Keyboard adapts to page size. Sounding of keystrokes. Voice text input.
            Changing languages</p>
      </div>
      <div class="carousel-item">
        <a class="project__link" href="" target="_blank">
          <figure>
            <img class="image-project" src="images/content/momentum.jpg" alt="Momentum">
            <figcaption class="title-project">Momentum</figcaption>          
          </figure>
        </a>        
        <p class="description-project">Working with date and time, storing data in localstorage and using asynchronous
            requests.</p>
      </div>
      <div class="carousel-item">
        <a class="project__link" href="" target="_blank">
          <figure>
            <img class="image-project" src="images/content/rs-clone.jpg" alt="Rs-clone">
            <figcaption class="title-project">Rs-clone</figcaption>          
          </figure>
        </a>        
        <p class="description-project">App for hotel. Booking a room at a hotel selected by the user for specific
            dates and sending this data to a remote server</p>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      &#5130;
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      &#5129;
    </button>
  </div>
    `, this.projectsContainer);
  }
}
