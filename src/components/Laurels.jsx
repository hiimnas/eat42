import React from 'react';
import './laurels.css';
import {images, data} from '../const';
import Subheading from './Subheading';

function Laurels() {
  return (
    <div className='app-bg app-wrapper section-padding' id='awards'>
      <div className='wrapper-info'>
        <Subheading title='Awards & Recognition' />
        <h1 className='headtext'>Our Laurels</h1>
        <div className='awards-list'>
          {data.awards.map((award) => (
            <div className='award-card'>
              <div className='head'>
                <img src={award.imgUrl} alt='award' />
                <h5 className='title p-primary'>{award.title}</h5>
              </div>
              
              <div className='body'>
                <p className='text p-primary'>{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='wrapper-img'>
        <img src={images.laurels} alt='laurels image' />
      </div>
    </div>
  )
}

export default Laurels