import React, {Component} from 'react';
import Product from './product';
import SideProduct from './side_product';
import './product.css';

class ProductIndex extends Component {
  render() {
    return (
      <div>
        <h1 className='DarkGrey CenterText'>Products</h1>
        <div className='ProductDiv PaddingBottom'>
          <SideProduct/>
          {[0, 1].map(item => <Product key={item}/>)}
          <SideProduct/>
        </div>
      </div>
    );
  }
}

export default ProductIndex;
