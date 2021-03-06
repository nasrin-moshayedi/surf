import React from 'react';
import {Button, Form, Grid, TextArea} from 'semantic-ui-react';
import './contact_us_form.css';

const ContactUsForm = () => (
  <Grid container className='MainGrid'>
    <Form>
      <Form.Group widths='equal'>
        <Grid container>
          <Grid.Column computer={8} tablet={15}>
            <Form.Input fluid
              id='form-subcomponent-shorthand-input-first-name'
              label='First name'
              placeholder='First name'
            />
          </Grid.Column>
          <Grid.Column computer={8} tablet={15}>
            <Form.Input fluid
              id='form-subcomponent-shorthand-input-last-name'
              label='Last name'
              placeholder='Last name'
            />
          </Grid.Column>
          <Grid.Column computer={8} tablet={15}>
            <Form.Input
              label='Email'
              id='form-subcomponent-shorthand-input-email'
              placeholder='info@gmail.com'
            />
          </Grid.Column>
          <Grid.Column computer={8} tablet={15}>
            <Form.Input fluid
              id='form-subcomponent-shorthand-input-phone'
              label='Phone'
              placeholder='+1 (123) 123-1234'
            />
          </Grid.Column>
          <Grid.Column computer={16} tablet={15}>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Opinion'
              placeholder='Opinion'
            />
          </Grid.Column>
          <Grid.Column computer={16} tablet={15}>
            <Button className='GreyText Button'>Submit</Button>
          </Grid.Column>
        </Grid>
      </Form.Group>

    </Form>
  </Grid>
);

export default ContactUsForm;
