import React from 'react';
import {Grid} from 'semantic-ui-react';
import './team_story.css';

const TeamStory = () => (
  <div className='OurTeamPicture'>
    <div className='OurTeamOpaity'>
      <Grid container textAlign='center' verticalAlign='middle' className='TextGrid'>
        <Grid.Column width={10} className='PictureText'>
          <h1 className='OurStoryTitle'>Our Story</h1>
          <h3> SurfEllent team has more than 10 years of experience in developing
            and advancing anti-icing coatings. SurfEllent company was founded
            at the University of Houston in 2017. Our mission at SurfEllent is
            to supplant traditional temporary anti-icing coatings with durable
            permanent coatings that could be sprayed on any surface to prevent
            ice accumulation.</h3>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default TeamStory;
