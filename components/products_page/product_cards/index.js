import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import ProductCards from './product_cards';
import './produc_cards.css';

class ProductCardIndex extends Component {
  render() {
    return (
      <div>
        <Grid container className='ProductCardsGrid'>
          {[0, 1, 2, 3].map(item => <Grid.Column computer={4} tablet={5} mobile={5}><ProductCards
            key={item}/></Grid.Column>)}
        </Grid>
      </div>
    );
  }
}

export default ProductCardIndex;
