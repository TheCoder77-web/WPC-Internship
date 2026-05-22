import { useState } from 'react';
import './projects.css';

import country1 from '../assets/country1.png';
import country2 from '../assets/country2.png';
import country3 from '../assets/country3.png';
import country4 from '../assets/country4.png';

import opendata1 from '../assets/opendata1.png';
import opendata2 from '../assets/opendata2.png';
import opendata3 from '../assets/opendata3.png';
import opendata4 from '../assets/opendata4.png';

import encrypt1 from '../assets/encrypt1.png';
import encrypt2 from '../assets/encrypt2.png';
import encrypt3 from '../assets/encrypt3.png';

function ProjectSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return <div className="slideshow-container">No images found</div>;
  }

  return (
    <div className="slideshow-container">
      <button className="slide-btn prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-img" />
      <button className="slide-btn next" onClick={nextSlide}>&#10095;</button>
      <div className="slide-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const countryImages = [
    country1,country2,country3,country4
  ];

  const nycImages = [
    opendata1,opendata2,opendata3,opendata4
  ];

  const encryptionImages = [
    encrypt1,encrypt2,encrypt3
  ];

  return (
    <div className="projects-wrapper">
      <div className="outline">
        <h1 className="txt2">Projects</h1>
        <hr />
      </div>

      <div className="card-container">
        <div className="card info">
          <h3>Country Website</h3>
          <hr></hr>
          <br></br>
          <ProjectSlideshow images={countryImages} /> 
          <a href="https://thecoder77-web.github.io/Mexico-Website/" target="_blank" rel="noreferrer">
            Visit Website
          </a>
        </div>

        <div className="card info">
          <h3>NYC Open Data</h3>
          <hr></hr>
          <br></br>
          <ProjectSlideshow images={nycImages} />
          <a href="https://thecoder77-web.github.io/NYCOpenDataProject/" target="_blank" rel="noreferrer">
            Visit Website
          </a>
        </div>

        <div className="card info">
          <h3>Encryption Project</h3>
          <hr></hr>
          <br></br>
          <ProjectSlideshow images={encryptionImages} />
          <a href="https://docs.google.com/presentation/d/1cCQ_h6PDwDS4InPclREi718PN6dIPeckeS6Md06_5Wo/edit?slide=id.p#slide=id.p" target="_blank" rel="noreferrer">
            View Presentation
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;