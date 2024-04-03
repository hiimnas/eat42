import React from 'react';
import './gallery.css';

import {images} from '../const';
import Subheading from './Subheading';

function Gallery() {
  return (
    <div className='gallery flex-center'>
      <div className='gallery-text'>
        <Subheading title='Pictures' />
        <h1 className='headtext'>Photo Gallery</h1>
        <p className='p-secondary'>Indulge your senses and explore the artistry of flavor at eat42. Immerse yourself in a culinary journey where each dish tells a story of passion, creativity, and exquisite taste. From vibrant appetizers to sumptuous main courses, and decadent desserts, our gallery showcases the finest creations crafted by our talented chefs.</p>
        <a href='#' role='button' className='btn btn-light custom-btn'>View More</a>
      </div>
      <div id='galleryCarousel' className='carousel slide carousel-fade'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={images.gallery04} className='d-block w-100' alt='gallery 4' />
          </div>
          <div className='carousel-item'>
            <img src={images.gallery03} className='d-block w-100' alt='gallery 3' />
          </div>
          <div className='carousel-item'>
            <img src={images.gallery02} className='d-block w-100' alt='gallery 2' />
          </div>
          <div className='carousel-item'>
            <img src={images.gallery01} className='d-block w-100' alt='gallery 1' />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#galleryCarousel' data-bs-slide='prev'>
          <i className='bi bi-caret-left-fill'></i>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#galleryCarousel' data-bs-slide='next'>
          <i className='bi bi-caret-right-fill'></i>
        </button>
      </div>
    </div>
  )
}

export default Gallery