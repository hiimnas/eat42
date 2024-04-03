import React from 'react';
import './footer.css';
import Newsletter from './Newsletter';
import {images} from '../const';

function Footer() {
  return (
    <div className='footer app-bg'>
      <Newsletter />
      <div className='footer-links'>
        <div className='contact-us'>
          <h1 className='footer-headtext'>Contact Us</h1>
          <a href='#'><p className='p-secondary'>123 Maple Street, Springfield, Countyshire,<br /> AB12 3CD, UK</p></a>
          <a href='#'><p className='p-secondary'>+44 (0)1234 567890</p></a>
        </div>
        <div className='footer-logo'>
          <img className='logo-img' src={images.logo} alt='logo' />
          <p className='p-secondary quotation'>"A feast for the senses, where every bite tells a story."</p>
          <img src={images.spoon} alt='spoon' className='spoon-img' />
          <div className='footer-icons'>
            <a href='https://www.facebook.com/' target='_blank'>
              <i className='bi bi-facebook'></i>
            </a>
            <a href='https://twitter.com/' target='_blank'>
              <i className='bi bi-twitter-x'></i>
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
              <i className='bi bi-instagram'></i>
            </a>
          </div>
        </div>
        <div className='work'>
          <h1 className='footer-headtext'>Working Hours</h1>
          <p className='p-secondary'>Monday - Friday:<br />12:00 pm - 12:00 am</p>
          <p className='p-secondary'>Saturday - Sunday:<br />12:00 pm - 01:00 am</p>
        </div>
      </div>
      <div className='footer-cprt'>
        <p className='p-secondary'>2024 eat42 · All rights reserved</p>
      </div>

      <hr />
      <p>© nas 🍵 eat42 original website idea coded using <a href="https://react.dev/" target="_blank">React</a>, <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML</a> and <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS</a>.</p>
    </div>
  )
}

export default Footer