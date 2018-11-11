import React from 'react';
import {Grid, Header, Image} from 'semantic-ui-react';
import './overview_picture.css';

const HomeImage = () => (
  <div>
    <Image src='/static/images/airplane.jpg' fluid/>
    <Grid container textAlign='center' className='CenterText'>
      <Grid.Column width={16}>
        <Header as='h1' className='DarkGrey'>
          Over View
        </Header>
      </Grid.Column>
      <Grid.Column width={16}>
        <p>
          Anti-icingsurfacesplayacriticalroleinabroadrangeofsystemsincluding
          infrastructures,transportationandenergysystems.Atcoldclimate,theabsence
          ofthesesurfacescanleadtocatastrophiceventsinpowersystems,aviation
          industryandmarinevessels.However,mostofthesurfacesusedbytheindustry
          areineffectiveinicerepellencyandsufferfrom long-term durability.SurfEllent
          hasstartedmanufacturinganti-icingsurfaceswithextremelylow iceadhesion
          andexceptionaldurabilityundersevereenvironmentalconditions.
        </p>
        <p className='ReadMore'>
          read more
        </p>
      </Grid.Column>
    </Grid>
  </div>
);

export default HomeImage;
