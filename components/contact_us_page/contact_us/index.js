import React, {Component} from 'react';
import ContactUsPicture from './../contact_us_picture';
import ContactUsInfo from './../contact_info';
import ContactUsForm from './../contact_us_form';

class ContactUsIndex extends Component {
  render() {
    return (
      <div className='BodyBackground'>
        <ContactUsPicture/>
        <ContactUsInfo/>
        <ContactUsForm/>
      </div>
    );
  }
}

export default ContactUsIndex;
