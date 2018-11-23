import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import ContactUsIndex from './../components/contact_us_page/contact_us';

class ContactUsPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout activeItem='contact us'>
          <ContactUsIndex/>
        </DefaultLayout>
      </div>
    );
  }
}

export default ContactUsPage;
