import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import ProductCategory from './product_category';
import './produc_category.css';

export default class ProductIndex extends Component {
  render() {
    return (
      <div>
        <Grid container className='ProductMainGrid'>
          {[0, 1, 2, 3].map(item => <Grid.Column width={4}><ProductCategory key={item}/></Grid.Column>)}
        </Grid>
      </div>
    );
  }
}
