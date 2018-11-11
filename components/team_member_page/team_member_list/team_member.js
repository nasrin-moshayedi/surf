import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const TeamMemberCard = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'/>
    </Card>
  </Card.Group>
);

export default TeamMemberCard;
