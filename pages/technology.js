import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import TechnologyIndex from './../components/technology_page/technology';

class TechnologyPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout activeItem='technology'>
          <TechnologyIndex/>
        </DefaultLayout>
      </div>
    );
  }
}

export default TechnologyPage;
