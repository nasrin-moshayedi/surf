import React from 'react';
import Services from './services';
// import './services.css';

const ServicesIndex = () => (
  <div>
    <h1 className='DarkGrey CenterText'>Services</h1>
    {
      [0, 1, 3].map(item =>
        <Services key={item} reverse={false}/>,
      )
    }
  </div>
);
export default ServicesIndex;
