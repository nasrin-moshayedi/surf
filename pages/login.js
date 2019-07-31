import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import LoginPage from '../components/login/';

class Login extends Component {
  render() {
    return (
      <div>
        <DefaultLayout>
          <LoginPage/>
        </DefaultLayout>
      </div>
    );
  }
}

export default Login;
