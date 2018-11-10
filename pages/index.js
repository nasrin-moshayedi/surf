import React, {Component} from 'react';
import MyLayout from '../layouts/my_layout';
import Home from '../components/home_page/home';

class Index extends Component {
  render() {
    return (
      <div>
        <MyLayout>
          <Home/>
        </MyLayout>
      </div>
    );
  }
}

export default Index;
