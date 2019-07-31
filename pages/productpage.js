import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import ProductPageIndex from '../components/products_page/product_page/index';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout>
          <ProductPageIndex/>
        </DefaultLayout>
      </div>
    );
  }
}

export default ProductPage;
