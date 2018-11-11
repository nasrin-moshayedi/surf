import React, {Component} from 'react';
import MyLayout from '../layouts/my_layout';
import Home from '../components/home_page/home';

// import Partner from '../components/home_page/partner';

class Index extends Component {
  render() {
    return (
      <div>
        <MyLayout>
          <Home/>
        </MyLayout>
        {/*<Partner/>*/}
      </div>
    );
  }
}

export default Index;
