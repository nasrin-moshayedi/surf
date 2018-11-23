import React from 'react';
import {Grid} from 'semantic-ui-react';
import Card from './../../global_components/card';
import './technoligy_application.css';

const TechnologyApplications = () => (
  <div className='ApplicationGrid'>
    <Grid container textAlign='center' vectiralign='middle'>
      <Grid.Column width={16}>
        <h1 className='CenterText DarkGrey'>Application</h1>
      </Grid.Column>
      {
        [0, 1, 2].map(item =>
          <Grid.Column key={item} className='CardGrid' computer={5} tablet={8} mobile={8}>
            <Card key={item}/>
          </Grid.Column>,
        )
      }
    </Grid>
  </div>
);

export default TechnologyApplications;
