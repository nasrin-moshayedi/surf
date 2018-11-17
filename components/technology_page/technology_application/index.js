import React from 'react';
import {Grid} from 'semantic-ui-react';
import Services from './../../home_page/services/services';

const TechnologyApplications = () => (
  <div className='ApplicationGrid'>
    <Grid container textAlign='center' vectiralign='middle'>
      <Grid.Column width={16}>
        <h1 className='CenterText DarkGrey'>Application</h1>
      </Grid.Column>
      <Grid.Column width={16}>
        {[0, 1, 2].map(item => <Services key={item}/>)}
      </Grid.Column>
    </Grid>
  </div>
);

export default TechnologyApplications;
