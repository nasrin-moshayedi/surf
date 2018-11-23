import React from 'react';
import {Divider, Grid, Icon, Image} from 'semantic-ui-react';
import Card from '.../global_components/card';
import './technology_videos.css';

const TechnologyVideos = () => (
  <div className='TechnologyVideosMainGrid'>
    <Grid container textAlign='center' verticalAlign='middle'>
      <Grid.Column computer={16} tablet={16} mobile={16} className='ZeroPadding'>
        <Image fluid src='/static/images/sh1.jpg'/>
      </Grid.Column>
      <Grid.Column width={16} className='VideoText'>
        <h4 className='BlueTitle'>
          SurfEllent air flio anti-icing experiment
        </h4>
        <p className='LightGreyText'>
          from <span className='Purple'>SurfEllentLLC</span>
        </p>
        <Divider/>
        <a className='IconColor'><Icon name='like'/></a>
        <a className='IconColor'><Icon name='share'/></a>
        <a className='IconColor'><Icon name='time'/></a>
      </Grid.Column>

      {
        [0, 1, 2, 3, 4, 5, 6, 7].map(item =>
          <Grid.Column key={item} computer={4} tablet={5} mobile={8}>
            <Card key={item}/>
          </Grid.Column>,
        )
      }
    </Grid>
  </div>
);

export default TechnologyVideos;
