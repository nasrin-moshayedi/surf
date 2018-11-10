import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './videos.css';

const src = 'static/images/a1.png';

const Videos = () => (
  <div className='DarkBackground VideosBottom'>
    <h1 className='BlueTitle CenterText'>Watch Videos</h1>
    <Grid textAlign='center'>
      <Image.Group>
        <Image src={src} size='small'/>
        <Image src={src} size='small'/>
        <Image src={src} size='medium'/>
        <Image src={src} size='small'/>
        <Image src={src} size='small'/>
      </Image.Group>
    </Grid>
  </div>
);

export default Videos;
