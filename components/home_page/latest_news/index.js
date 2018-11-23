import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './latest_news.css';

const LatestNews = () => (
  <div className='DarkBackground'>
    <Grid container className='NewsGrid'>
      <Grid.Column largeScreen={12} computer={12} tablet={11} mobile={9} textAlign='center' verticalAlign='middle'>
        <h1 className='BlueTitle'>latest news</h1>
        <h2 className='BlueTitle'>Anti-icingspraycoating</h2>
        <h3 className='GreyText'>
          THENEW ANTI ICINGAEROSOLINBOTH BLACK AND TRANSPARENT VERSIONSA
        </h3>
        <h3 className='ReadMore'>read more</h3>
      </Grid.Column>
      <Grid.Column largeScreen={4} computer={4} tablet={5} mobile={7} className='PictureGrid'>
        <Image src='/static/images/Aerosol.jpg'/>
      </Grid.Column>
    </Grid>
  </div>
);

export default LatestNews;
