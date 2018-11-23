import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './last_news.css';

const TechnologyApplications = () => (
  <div>
    <Grid.Column width={16} className='ZeroPadding'>
      <Image src='/static/images/13.jpg' className='ZeroPadding'/>
      <div className='ImageTextStyle TextPadding'>
        <h3>this is ship</h3>
        <p>this is for test </p>
      </div>
    </Grid.Column>
  </div>
);

export default TechnologyApplications;
