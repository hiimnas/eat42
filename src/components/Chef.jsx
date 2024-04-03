import React from 'react';
import './chef.css';
import {images} from '../const';
import Subheading from './Subheading';

function Chef() {
  return (
    <div className='chef app-bg app-wrapper section-padding' id='chef'>
      <div className='wrapper-img wrapper-img-reverse'>
        <img src={images.chef} alt='chef' />
      </div>
      <div className='wrapper-info'>
        <Subheading title='Chef&#39;s word' />
        <h1 className='headtext'>What we believe in</h1>
        <div className='chef-content'>
          <div className='chef-quote'>
            <i className='bi bi-quote display-5'></i>
            <p className='p-secondary' style={{color: 'var(--bs-red)'}}>Food is not just about nourishment, it's about the experience and the memories it creates.</p>
          </div>
          <p className='p-secondary'>At eat42, we believe in using only the freshest, highest quality ingredients, and creating dishes that are both delicious and visually stunning. We are constantly pushing the boundaries of flavor and presentation, and are committed to providing our guests with an unforgettable dining experience.</p>
        </div>
        <div className='chef-sign'>
          <p>Kevin Luo</p>
          <p className='p-secondary'>Chef & Founder</p>
          <img src={images.sign} />
        </div>
      </div>
    </div>
  )
}

export default Chef