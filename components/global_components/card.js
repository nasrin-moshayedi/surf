import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

const CardComponent = () => (
  <Card className='CardStyle'>
    <Image src='/static/images/sh1.jpg'/>
    <Card.Content className='CardContentStyle'>
      <Card.Header className='HeaderStyle'><h5 className='BlueTitle'>SurfEllent air flio anti-icing experiment</h5>
      </Card.Header>
      <Card.Description>
        <p className='LightGreyText'>from <span className='Purple'>SurfEllentLLC</span></p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra className='CardContentStyle'>
      <a><Icon name='like'/></a>
      <a className='ShareIcon'><Icon name='share'/></a>
      <a><Icon name='time'/></a>
    </Card.Content>
  </Card>
);
export default CardComponent;
