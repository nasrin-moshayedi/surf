import React from 'react';
import {Grid} from 'semantic-ui-react';
import './footer.css';

const Footer = () => (
  <div className='DarkBackground'>
    <Grid container textAlign='center' className=''>
      <Grid.Column mobile={16} tablet={8} computer={4} className='GreyText'>
        <h3 className='BlueTitle'>Connections</h3>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5} className='GreyText'>
        <h3 className='BlueTitle'> SurfEllent, Inc.</h3>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={3} className='GreyText'>
        <h3 className='BlueTitle'>Links</h3>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4} className='GreyText'>
        <h3 className='BlueTitle'>Address</h3>
      </Grid.Column>
    </Grid>
  </div>
);

export default Footer;
