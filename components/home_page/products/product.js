import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import './product.css';

let large;

class Product extends Component {
  render() {
    this.props.large ? (large = 'ProductPadding') : (large = 'ProductCard');
    return (
      <Card className={large}>
        <Image src='/static/images/Aerosol.jpg'/>
        <Card.Content>
          <Card.Header><Icon name='product hunt' className='BlueTitle'/>product name</Card.Header>
          <Card.Meta><Icon name='dollar' className='BlueTitle'/>100$</Card.Meta>
          <Card.Description><Icon name='list alternate outline' className='BlueTitle'/>description.</Card.Description>
        </Card.Content>
        <Card.Content>
          <a className='ReadMore'>
            read more <Icon name='chevron right' className='BlueTitle'/>
          </a>
        </Card.Content>
      </Card>
    );
  }
}


export default Product;
