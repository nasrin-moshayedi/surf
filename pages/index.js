import React, {Component} from 'react';
import MyLayout from '../layouts/my_layout';
import ContactUs from './../components/contact_us_page/contact_us';

class Index extends Component {
  render() {
    return (
      <div>
        <MyLayout>
          <ContactUs/>
        </MyLayout>
      </div>
    );
  }
}

export default Index;
