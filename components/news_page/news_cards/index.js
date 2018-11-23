import React from 'react';
import {Divider, Grid, Image, Segment} from 'semantic-ui-react';
import './news_cards.css';

const LastNewsCard = () => (
  <div className='ApplicationGrid NewsDiv'>
    <Grid container textAlign='left' vectiralign='middle' className='DarkGrey'>
      <Grid.Column width={2} textAlign='center' className='TitleGrid'>
        <h1>News</h1>
      </Grid.Column>
      {
        [0, 1, 2].map(item =>
          <Grid.Column key={item} className='ZeroPadding' computer={16} tablet={16} mobile={16}>
            <Segment className='NewsSegmentStyle'>
              <Grid textAlign='left' vectiralign='middle'>
                <Grid.Column width={5}>
                  <Image src='/static/images/sh1.jpg' key={item}/>
                </Grid.Column>
                <Grid.Column width={11}>
                  <h1 className='BlueTitle'>title</h1>
                  <p>text for test</p>
                  <h4 className='ReadMore NewsReadMore'>read more</h4>
                </Grid.Column>
              </Grid>
            </Segment>
            <Divider/>
          </Grid.Column>,
        )
      }
    </Grid>
  </div>
);

export default LastNewsCard;
