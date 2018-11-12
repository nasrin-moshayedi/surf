import React from 'react';
import {Grid} from 'semantic-ui-react';
import './contact_us_picture.css';

const ContactUsPicture = () => (
  <div className='OurTeamPicture'>
    <div className='OurTeamOpaity'>
      <Grid container textAlign='center' verticalAlign='middle' className='TextGrid'>
        <Grid.Column width={10} className='PictureText'>
          <h1 className='DarkGrey OurStoryTitle'>Contact US</h1>
          <h2 className='DarkGrey'>you are ineterested in working with SurfEllent, please fill out the form and we will
            be in touch as
            soon as possible.</h2>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default ContactUsPicture;
