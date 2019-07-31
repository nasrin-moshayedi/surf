import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import ProductIndex from './../components/products_page/product';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout activeItem='product'>
          <ProductIndex/>
        </DefaultLayout>
      </div>
    );
  }
}

export default ProductPage;
