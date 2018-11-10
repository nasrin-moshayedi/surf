import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './services.css';

const Services = () => (
  <Grid container verticalAlign='middle' className='PaddingBottom'>
    <Grid.Column width={16}>
      <h1 className='DarkGrey CenterText'>Services</h1>
    </Grid.Column>
    <Grid.Column width={10} className='WhiteBackground'>
      <h3 className='DarkGrey'>Powertransmissionlines</h3>
      <h5 className='DarkGrey'>Extremeandfluctuatingweatherconditions,includinghigh
        humidity,freezingtemperatures....</h5>
      <h5 className='ReadMore'>Read more</h5>
    </Grid.Column>
    <Grid.Column width={6}>
      <Image src='static/images/sh1.jpg'/>
    </Grid.Column>
    <Grid.Column width={6}>
      <Image src='static/images/sh1.jpg'/>
    </Grid.Column>
    <Grid.Column width={10} className='WhiteBackground'>
      <h3 className='DarkGrey'>Airplanes</h3>
      <h5 className='DarkGrey'>Icetypicallybuildsupwhentinyclouddropletsimpactand
        freezeontheleadingedges...</h5>
      <h5 className='ReadMore'>Read more</h5>
    </Grid.Column>
    <Grid.Column width={10} className='WhiteBackground'>
      <h3 className='DarkGrey'>Marinevessels</h3>
      <h5 className='DarkGrey'>Seasprayicingisaserioushazardformarineoperations
        inhighlatituderegions.Manyshipsandliveshavebeenlost...</h5>
      <h5 className='ReadMore'>Read more</h5>
    </Grid.Column>
    <Grid.Column width={6}>
      <Image src='static/images/sh1.jpg'/>
    </Grid.Column>
  </Grid>
);

export default Services;
