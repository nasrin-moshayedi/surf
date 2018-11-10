import React from 'react';
import {Header, Image} from 'semantic-ui-react';
import './overview_picture.css';

const HomeImage = () => (
  <div className='OverviewDiv'>
    <Image src='/static/images/airplane.jpg' fluid/>
    <Header as='h1' className='DarkGrey'>
      Over View
    </Header>
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
  </div>
);

export default HomeImage;
