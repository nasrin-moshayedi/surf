import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import './contact_us_info.css';

const TeamMemberCard = () => (
  <Grid container textAlign='center' className='MainGrid'>
    <Grid.Column textAlign='left' computer={5} tablet={16} mobile={16}>
      <Grid verticalAlign='middle'>
        <Grid.Column width={1} className='IconGrid'>
          <Icon name='location arrow' size='large' className='IconStyle GreyText'/>
        </Grid.Column>
        <Grid.Column width={10}>
          <p>
            UH TechnologyPark 5000
            GulfFreeway Bldg5, Rm 144
            Houston,TX,77023
          </p>
        </Grid.Column>
      </Grid>
    </Grid.Column>
    <Grid.Column textAlign='left' computer={5} tablet={16} mobile={16}>
      <Grid verticalAlign='middle'>
        <Grid.Column width={1} className='IconGrid'>
          <Icon name='phone' size='large' className='IconStyle GreyText'/>
        </Grid.Column>
        <Grid.Column width={10}>
          <p>+1(617)416-2782</p>
        </Grid.Column>
      </Grid>
    </Grid.Column>
    <Grid.Column textAlign='left' computer={4} tablet={16} mobile={16}>
      <Grid verticalAlign='middle'>
        <Grid.Column width={1} className='IconGrid'>
          <Icon name='mail' size='large' className='IconStyle GreyText'/>
        </Grid.Column>
        <Grid.Column width={10}>
          <p>info@surfellent.com</p>
        </Grid.Column>
      </Grid>
    </Grid.Column>
  </Grid>
);

export default TeamMemberCard;
