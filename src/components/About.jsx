import React from 'react';
import './about.css';
import {images} from '../const';

function About() {
  return (
    <div className='about app-bg flex-center section-padding' id='about'>
      <div className='about-overlay flex-center'>
        <img src={images.f2} />
      </div>
      <div className='about-content flex-center'>
        <div className='aboutus'>
          <h1 className='headtext'>About Us</h1>
          <img src={images.spoon} alt='spoon' className='spoon-img' />
          <p className='p-secondary'>At eat42, we believe that the key to a great dining experience lies in <b>the quality of ingredients and the skillful preparation of dishes</b>. Our team of talented chefs work tirelessly to source the <b>freshest, finest ingredients</b>, combining them in creative and innovative ways to craft dishes that are both <b>delicious and visually stunning</b>.</p>
          <a role='button' className='btn btn-outline-light' href='#chef'>Read More</a>
        </div>
      </div>
      <div className='knife flex-center'>
        <img src={images.knife} alt='knife' />
      </div>
      <div className='about-content flex-center'>
        <div className='history'>
          <h1 className='headtext'>Our History</h1>
          <img src={images.spoon} alt='spoon' className='spoon-img' />
          <p className='p-secondary'><b>Eat42 first opened in 2005</b>, with a mission to provide guests with a taste of the world's diverse culinary traditions. Our founder, <b>Kevin Luo</b>, had a passion for food and a desire to create a <b>unique restaurant experience</b> that would delight and surprise guests. Over the years, we have expanded our menu and grown our team, while staying <b>true to our roots</b>. Today, we are proud to be <b>one of the best</b> restaurants in the UK with a loyal following.</p>
          <a role='button' className='btn btn-outline-light' href='#chef'>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default About