import React, {Component} from 'react';
import Link from 'next/link';
import {Button, Checkbox, Form, Grid} from 'semantic-ui-react';

class LoginIndex extends Component {
  render() {
    return (
      <div>
        <Grid container textAlign='center' className='LoginGrid'>
          <Grid.Column width={12}>
            <h1 className='GreenColor' color='green'>LOGIN</h1>
            <Form>
              <Form.Group widths='equal'>
                <Grid container textAlign='center'>
                  <Grid.Column computer={9} tablet={15} textAlign='left'>
                    <Form.Input fluid id='form-subcomponent-shorthand-input-first-name' label='First name'
                                placeholder='First name'/>
                  </Grid.Column>
                  <Grid.Column computer={9} tablet={15} textAlign='left'>
                    <Form.Input fluid id='form-subcomponent-shorthand-input-password' label='Password'
                                placeholder='password' type='password'/>
                  </Grid.Column>
                  <Grid.Column computer={9} tablet={15} mobile={15} textAlign='left'>
                    <Checkbox label='Forget my password' className='DarkGrey'/>
                  </Grid.Column>
                  <Grid.Column computer={9} tablet={15}>
                    <Button color='green' className='GreyText Button DisplayStyle'>Submit</Button>
                  </Grid.Column>
                  <Grid.Column computer={9} tablet={15} mobile={15}>
                    <Link href='/signup'><a className='DarkGrey'>first time here? SignUp</a></Link>
                  </Grid.Column>
                </Grid>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginIndex;
