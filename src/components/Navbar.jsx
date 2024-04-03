import React, { useState } from 'react';
import './navbar.css';
import images from '../const/images';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <a href='/'>
          <img src={images.logo} alt='eat42 logo' />
        </a>
      </div>
      <ul className='nav-links'>
        <li className='p-secondary'><a href='#home'>Home</a></li>
        <li className='p-secondary'><a href='#about'>About</a></li>
        <li className='p-secondary'><a href='#menu'>Menu</a></li>
        <li className='p-secondary'><a href='#awards'>Awards</a></li>
        <li className='p-secondary'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='nav-login'>
        <a href='#' className='p-secondary'>Login / Register</a>
        <div />
        <a href='#' className='p-secondary'>Book a Table</a>
      </div>
      <div className='nav-small'>
        <button type='button' className='btn btn-outline-light open' onClick={() => setToggleMenu(true)}>
          <i className='bi bi-list'></i>
        </button>
        {toggleMenu && (
        <div className='nav-small-overlay flex-center slide-bottom'>
          <button type='button' className='btn btn-outline-light close' onClick={() => setToggleMenu(false)}>
            <i className='bi bi-x-lg'></i>
          </button>
          <div className='nav-login small'>
            <a href='#' className='p-secondary'>Login / Register</a>
            <div />
            <a href='/' className='p-secondary'>Book a Table</a>
          </div>
          <ul className='nav-small-links'>
            <li className='p-secondary'><a href='#home'>Home</a></li>
            <li className='p-secondary'><a href='#about'>About</a></li>
            <li className='p-secondary'><a href='#menu'>Menu</a></li>
            <li className='p-secondary'><a href='#awards'>Awards</a></li>
            <li className='p-secondary'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        )}
      </div>
      <hr />
    </div>
  )
}

export default Navbar