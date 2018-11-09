import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './latest_news.css';

const LatestNews = () => (
  <Grid className='NewsGrid'>
    <Grid.Column largeScreen={12} computer={12} tablet={11} mobile={9} textAlign='center' verticalAlign='middle'>
      <h1>latest news</h1>
      <h2>Anti-icingspraycoating</h2>
      <h5>THENEW ANTIʊICINGAEROSOLINBOTH
        BLACKANDTRANSPARENTVERSIONSA</h5>
      <p>read more</p>
    </Grid.Column>
    <Grid.Column largeScreen={4} computer={4} tablet={5} mobile={7}>
      <Image src='/static/images/Aerosol.jpg'/>
    </Grid.Column>
  </Grid>
);

export default LatestNews;
