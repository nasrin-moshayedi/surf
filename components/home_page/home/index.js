import {Component} from 'react';
import OverviewPicture from '../overview_picture';
import LatestNews from './../latest_news';

class HomeIndex extends Component {
  render() {
    return (
      <div>

        <OverviewPicture/>
        <LatestNews/>

      </div>
    );
  }
}

export default HomeIndex;
