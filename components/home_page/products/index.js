import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import Product from './product';
import './product.css';

class ProductIndex extends Component {
  render() {
    return (

      <Grid container className='ProductDiv PaddingBottom'>
        <Grid.Column width={16}><h1 className='DarkGrey CenterText'>Products</h1></Grid.Column>
        {[0, 1, 2, 3].map(item =>
          <Grid.Column mobile={16} tablet={8} computer={4}><Product key={item} large={false}/></Grid.Column>
        )}
      </Grid>
    );
  }
}

export default ProductIndex;
