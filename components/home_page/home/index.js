import {Component} from 'react';
import OverviewPicture from '../overview_picture';
import LatestNews from './../latest_news';
import Products from './../products';

class HomeIndex extends Component {
  render() {
    return (
      <div className='BodyBackground'>
        <OverviewPicture/>
        <LatestNews/>
        <Products/>
      </div>
    );
  }
}

export default HomeIndex;
