import React from 'react';
import './menu.css';
import {images, data} from '../const';
import Subheading from './Subheading';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className='menu flex-center' id='menu'>
      <div className='menu-title'>
        <Subheading title='Menu that fits your palette' />
        <h1 className='headtext'>Today's Specials</h1>
        <div className='menu-contents'>
          <div className='beverages flex-center'>
            <p className='display-5'>Beverages</p>
            <div className='menu-items'>
              {data.beverages.map((bev, index) => (
                <MenuItem key={bev.title + index} title={bev.title} price={bev.price} desc={bev.description} />
              ))}
            </div>
          </div>
          <div className='menu-img'>
            <img src={images.menu} alt='menu' />
          </div>
          <div className='appetizers flex-center'>
            <p className='display-5'>Appetizers</p>
            <div className='menu-items'>
              {data.appetizers.map((app, index) => (
                <MenuItem key={app.title + index} title={app.title} price={app.price} desc={app.description} />
              ))}
            </div>
          </div>
          <div className='menu-img'>
            <img src={images.menubg} alt='menu' />
          </div>
          <div className='mains flex-center'>
            <p className='display-5'>Main Courses</p>
            <div className='menu-items'>
              {data.mainCourses.map((main, index) => (
                <MenuItem key={main.title + index} title={main.title} price={main.price} desc={main.description} />
              ))}
            </div>
          </div>
          <div className='sides flex-center'>
            <p className='display-5'>Sides</p>
            <div className='menu-items'>
              {data.sides.map((side, index) => (
                <MenuItem key={side.title + index} title={side.title} price={side.price} desc={side.description} />
              ))}
            </div>
          </div>
          <div className='desserts flex-center'>
            <p className='display-5'>Desserts</p>
            <div className='menu-items'>
              {data.desserts.map((dessert, index) => (
                <MenuItem key={dessert.title + index} title={dessert.title} price={dessert.price} desc={dessert.description} />
              ))}
            </div>
          </div>
          <div className='menu-img double'>
            <img src={images.desserts} alt='menu' />
          </div>
        </div>

        <div style={{marginTop: '15px'}}>
          <button type='button' className='btn btn-light custom-btn'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Menu