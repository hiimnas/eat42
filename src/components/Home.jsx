import React from 'react';
import './home.css';
import images from '../const/images';
import Subheading from './Subheading';

function Home() {
  return (
    <div className='header app-wrapper section-padding' id="home">
      <div className='wrapper-info'>
        <Subheading title='Chase the new flavor' />
        <h1 className='display-1'>The Key to Fine Dining</h1>
        <p className='p-secondary' style={{margin: '2rem 0'}}>We are a <b>fine dining restaurant</b>, dedicated to bringing our guests on a <b>unique and unforgettable</b> dining journey. Our menu features a <b>fusion of flavors</b> from around the world, creating a <b>dynamic and exciting dining experience</b>.</p>
        <a href='#menu' className='btn btn-light custom-btn'>Explore Menu</a>
      </div>
      <div className='wrapper-img'>
        <img src={images.welcome} alt='salmon image' />
      </div>
    </div>
  )
}

export default Home