import React, {Component} from 'react';
import TechnologyInfo from '../technology_info';
import Technology_applications from './../technology_application';
import TechnologyVideos from './../technology_videos';

class TechnologyIndex extends Component {
  render() {
    return (
      <div className='BodyBackground'>
        <TechnologyVideos/>
        <TechnologyInfo/>
        <Technology_applications/>

      </div>
    );
  }
}

export default TechnologyIndex;
