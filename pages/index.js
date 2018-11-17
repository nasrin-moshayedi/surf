import React, {Component} from 'react';
import MyLayout from '../layouts/my_layout';
import Technology from './../components/technology_page/technology';

class Index extends Component {
  render() {
    return (
      <div>
        <MyLayout>
          <Technology/>
        </MyLayout>
      </div>
    );
  }
}

export default Index;
