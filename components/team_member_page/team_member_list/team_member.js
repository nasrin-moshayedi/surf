import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const TeamMemberCard = () => (
  <Card.Group>
    <Card>
      <Card.Content className='CardContent'>
        <Card.Header>Hadi Ghasemi</Card.Header>
        <Card.Meta>SEO, Co-founder</Card.Meta>
        <Card.Description className='Description'>Cedric Pasco is the marketing specialist for SurfEllent with a
          background in media services. He is a student at the University of Houston attending the #2 ranked
          Entrepreneurship Program in the Nation. Through this program, he has launched an Amazon e-commerce business,
          worked with the UH engineering school to create a business model around an Intellectual Property, and created
          a profitable three-day pop-up restaurant with fellow program members.</Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src='/static/images/HadiGhasemi.jpg'/>
    </Card>
  </Card.Group>
);

export default TeamMemberCard;
