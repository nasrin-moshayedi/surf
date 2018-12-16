import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import HomeIndex from '../components/home_page/home';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout activeItem='home'>
          <HomeIndex/>
        </DefaultLayout>
      </div>
    );
  }
}

export default IndexPage;
