import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './videos.css';

const src = 'static/images/a1.png';

const Videos = () => (
  <div className='DarkBackground PaddingBottom'>
    <h1 className='BlueTitle CenterText'>Watch Videos</h1>
    <Grid container textAlign='center' verticalAlign='middle'>
      {
        [0, 1, 2, 3, 4].map(item =>
          <Grid.Column key={item} mobile={12} tablet={3} computer={3}>
            <Image src={src} size='small'/>
          </Grid.Column>,
        )
      }
    </Grid>
  </div>
);

export default Videos;
