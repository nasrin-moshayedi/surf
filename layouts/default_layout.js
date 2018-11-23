import React from 'react';
import Menu from './menu';
import Footer from './footer';

const DefaultLayout = props => (
  <div>
    <Menu activeItem={props.activeItem}/>
    {props.children}
    <Footer/>
  </div>
);

export default DefaultLayout;
