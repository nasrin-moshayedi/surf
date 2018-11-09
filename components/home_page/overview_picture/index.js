import React from 'react';
import {Header, Image, Segment} from 'semantic-ui-react';

const HomeImage = () => (
  <Segment textAlign='center'>
    <Image src='/static/images/airplane.jpg' fluid/>
    <Header as='h1'>
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
    <p>
      read more
    </p>
  </Segment>
);

export default HomeImage;
