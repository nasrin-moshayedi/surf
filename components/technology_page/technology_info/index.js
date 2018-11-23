import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './technology_info.css';

const TechnologyInfo = () => (
  <div className='DarkBackground TechnologyMainGrid'>
    <Grid container textAlign='center' verticalAlign='middle'>
      <Grid.Column computer={6} tablet={10} mobile={10}>
        <Image src='/static/images/Tech1.jpeg'/>
      </Grid.Column>
      <Grid.Column computer={10} tablet={16} mobile={16} className='TechnologyTextGrid'>
        <h1 className='technologyText BlueTitle'>
          DURABLE ANTI-ICING SURFACES
        </h1>
        <h3 className='GreyText'>
          SurfEllent anti-icing coatings with extremelely low ice adhesion are capable of
          removing ice accumulation
          from any surface just with a simple air flow. This can prove to be highly efficient for aeronatical, power
          transmission and marine applications and can reduce the complexities associated with ice removal from these
          surfaces
        </h3>
      </Grid.Column>
    </Grid>
  </div>
);

export default TechnologyInfo;
