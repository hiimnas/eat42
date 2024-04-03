import React from 'react';
import './menuitem.css';

const MenuItem = ({title, price, desc}) => {
  return (
    <div className='menu-item'>
        <div className='item-head'>
            <div className='item-name'>
                <p className='p-primary' style={{color: '#DCCA87'}}>{title}</p>
            </div>
            <div className='item-dash' />
            <div className='item-price'> 
                <p className='p-primary'>{price}</p>
            </div>
        </div>
        <div className='item-sub'>
            <p className='p-secondary' style={{color: '#AAA'}}>{desc}</p>
        </div>
    </div>
  )
}

export default MenuItem