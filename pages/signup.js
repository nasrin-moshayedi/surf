import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import SignupIndex from '../components/signup/index';

class Signup extends Component {
  render() {
    return (
      <div>
        <DefaultLayout>
          <SignupIndex/>
        </DefaultLayout>
      </div>
    );
  }
}

export default Signup;
