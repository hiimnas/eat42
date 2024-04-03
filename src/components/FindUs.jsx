import React from 'react';
import './findus.css';
import Subheading from './Subheading';
import {images} from '../const';

function FindUs() {
  return (
    <div className='app-bg app-wrapper section-padding' id='contact'>
      <div className='wrapper-info'>
        <Subheading title='Contact' />
        <h1 className='headtext'>Find Us</h1>
        <div className='wrapper-content'>
          <p className='address p-secondary'>123 Maple Street,<br />Springfield,<br />Countyshire,<br />AB12 3CD,<br />United Kingdom</p>
          <p className='p-primary'>Opening Hours:</p>
          <p className='p-secondary'>Mon - Fri: 12:00 pm - 12:00 am</p>
          <p className='p-secondary'>Sat - Sun: 12:00 pm - 01:00 am</p>
        </div>
        <a className='btn btn-outline-danger custom-btn' href='https://www.google.com/maps' target='_blank'>
          Visit Us
        </a>
      </div>
      <div className='wrapper-img'>
        <img src={images.findus} alt='find us' />
      </div>
    </div>
  )
}

export default FindUs