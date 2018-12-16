import React, {Component} from 'react';
import {Grid, Image} from 'semantic-ui-react';
import ProductMenu from '../product_menu';
import ProductCategory from '../product_categories';
import ProductCards from '../product_cards';
import './product.css';

class ProductIndex extends Component {
  render() {
    return (
      <div className='BodyBackground ProductMainDiv'>
        {/*<ProductPicture/>*/}
        <ProductMenu/>
        <ProductCategory/>
        <Grid>
          <Grid.Column width={16}>
            <Image src='/static/images/i3.jpg' fluid/>
          </Grid.Column>
        </Grid>
        <ProductCards/>
      </div>
    );
  }
}

export default ProductIndex;
