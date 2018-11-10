import React, {Component} from 'react';
import OverviewPicture from '../overview_picture';
import LatestNews from './../latest_news';
import Products from './../products';
import Videos from './../watch_videos';

class HomeIndex extends Component {
  render() {
    return (
      <div className='BodyBackground'>
        <OverviewPicture/>
        <LatestNews/>
        <Products/>
        <Videos/>
      </div>
    );
  }
}

export default HomeIndex;
