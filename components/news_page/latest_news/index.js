import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import LastNewsCard from './last_news';
import './last_news.css';

class LastNews extends Component {
  render() {
    return (
      <div className='DarkBackground MainDivStyle'>
        <Grid container verticalAlign='top'>
          <Grid.Column width={11} className='PaddingZero'>
            < LastNewsCard/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Grid>
              {[0, 1].map(item =>
                <Grid.Column key={item} width={16} className='PaddingZero SmallPictureGrid'>
                  <LastNewsCard key={item}/>
                </Grid.Column>
              )}
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LastNews;
