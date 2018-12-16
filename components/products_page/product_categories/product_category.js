import React, {Component} from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './produc_category.css';

export default class ProductCategory extends Component {
  render() {
    return (
      <div>
        <Grid container textAlign='center' className='WhiteColor'>
          <Grid.Column width={16}>
            <h3 className='CategoryName DarkGrey'>category name</h3>
          </Grid.Column>
          <Grid.Column width={16}>
            <Image src='/static/images/Aerosol.jpg'/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
