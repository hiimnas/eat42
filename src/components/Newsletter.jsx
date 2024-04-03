import React from 'react';
import './newsletter.css';
import Subheading from './Subheading';

function Newsletter() {
  return (
    <div className='newsletter'>
        <div className='newsletter-heading'>
            <Subheading title='Newsletter' />
            <h1 className='headtext'>Subscribe to our Newsletter</h1>
            <p className='p-secondary'>And never miss the latest updates!</p>
        </div>
        <form className='newsletter-form flex-center input-group'>
            <input type='email' className='form-control' placeholder='Your Email Here' aria-label='your email here' />
            <button className='btn btn-outline-light custom-btn' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter