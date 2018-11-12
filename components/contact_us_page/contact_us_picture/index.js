import React from 'react';
import {Grid} from 'semantic-ui-react';
import './contact_us_picture.css';

const ContactUsPicture = () => (
  <div className='ContactPicture Picture'>
    <div className='ContactPictureOpaity PictureOpaity'>
      <Grid container textAlign='center' verticalAlign='middle' className='TextGrid'>
        <Grid.Column width={10} className='PictureText'>
          <h1 className='DarkGrey PictureTextTitle'>Contact US</h1>
          <h2 className='DarkGrey'>you are ineterested in working with SurfEllent, please fill out the form and we will
            be in touch as
            soon as possible.</h2>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default ContactUsPicture;
