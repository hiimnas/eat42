import React from 'react';
import './subheading.css';
import images from '../const/images';

const Subheading = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
        <p className='p-primary'>{title}</p>
        <img src={images.spoon} alt='spoon' className='spoon-img' />
    </div>
  )
}

export default Subheading