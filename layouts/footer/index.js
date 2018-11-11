import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import './footer.css';

const Footer = () => (
  <div className='DarkBackground'>
    <Grid container textAlign='left' className='FooterGrid'>
      <Grid.Column mobile={16} tablet={8} computer={4} className='GreyText'>
        <h3 className='BlueTitle'>Connections</h3>
        <Grid>
          <Grid.Column mobile={4} tablet={9} computer={6} className='GreyText'>
            <Icon name='facebook' size='huge'/>
          </Grid.Column>
          <Grid.Column mobile={4} tablet={1} computer={8} className='GreyText'>
            <Icon name='twitter square' size='huge'/>
          </Grid.Column>
          <Grid.Column mobile={4} tablet={9} computer={6} className='GreyText'>
            <Icon name='instagram' size='huge'/>
          </Grid.Column>
          <Grid.Column mobile={4} tablet={1} computer={8} className='GreyText'>
            <Icon name='linkedin' size='huge'/>
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5} className='GreyText'>
        <h3 className='BlueTitle'> SurfEllent, Inc.</h3>
        <Grid textAlign='left'>
          <Grid.Column width={14}>
            <h5>SurfEllentis a startup
              company which provides
              unique durable coatings
              foricingproblems.</h5>
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={3} className='GreyText'>
        <h3 className='BlueTitle'>Links</h3>
        <Grid textAlign='left'>
          <Grid.Column width={16}>
            <a href='#' className='GreyText'>Home</a>
          </Grid.Column>
          <Grid.Column width={16}>
            <a href='#' className='GreyText'>Team Member</a>
          </Grid.Column>
          <Grid.Column width={16}>
            <a href='#' className='GreyText'>Technology</a>
          </Grid.Column>
          <Grid.Column width={16}>
            <a href='#' className='GreyText'>News</a>
          </Grid.Column>
          <Grid.Column width={16}>
            <a href='#' className='GreyText'>Contact Us</a>
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4} className='GreyText'>
        <h3 className='BlueTitle'>Address</h3>
        <Grid>
          <Grid.Column width={1}>
            <Icon name='location arrow' size='small'/>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>UH TechnologyPark 5000
              GulfFreeway Bldg5, Rm 144
              Houston,TX,77023</p>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={1}>
            <Icon name='phone' size='small'/>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>+1(617)416-2782</p>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={1}>
            <Icon name='mail' size='small'/>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>info@surfellent.com</p>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  </div>
);

export default Footer;
