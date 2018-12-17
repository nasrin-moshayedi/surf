import React, {Component} from 'react';
import {Button, Divider, Dropdown, Grid, Icon, Image} from 'semantic-ui-react';
import ProductMenu from '../product_menu';
import './produc_page.css';

const options = [
  {key: 1, text: '1', value: 1},
  {key: 2, text: '2', value: 2},
  {key: 3, text: '3', value: 3},
];

class ProductPageIndex extends Component {
  render() {
    return (
      <div className='BodyBackground ProductMainDiv'>
        <ProductMenu/>
        <Grid>
          <Grid.Column width={16} className='ColumnMargin'>
            <Grid container verticalAlign='middle'>
              <Grid.Column width={6}>
                <Image src='/static/images/Aerosol.jpg'/>
              </Grid.Column>
              <Grid.Column width={10} textAlign='center'>
                <h1>Product Name</h1>
                <h2>$Price </h2>
                <h4>Description</h4>
                <Dropdown selection options={options} compact placeholder='1' className='Icon DropDownStyle'/>
                <Button size='medium' color='green' className='ButtonMargin'>CheckOut</Button>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column width={16} className='CardImageStyle'>
            <Image fluid src='/static/images/airplane.jpg'/>
          </Grid.Column>
          <Grid.Column width={16}>
            <Grid container textAlign='center' className='GridMargin'>
              {[0, 1, 2].map(item =>
                <Grid.Column textAlign='center' computer={4} tablet={5} mobile={5} className='MapGridStyle'>
                  <Image src='/static/images/Aerosol.jpg' key={item}/>
                  <h3>ProductName</h3>
                  <h4>Product description</h4>
                  <Button size='large' color='green'>
                    <Icon name='shop'/> add to cart
                  </Button>
                </Grid.Column>)}
            </Grid>
          </Grid.Column>
          <Grid.Column textAlign='center' width={16} className='ColumnMargin'>
            <h1>Customer Preview</h1>
            {[0, 1, 2].map(item =>
              <Grid textAlign='left' container>
                <Grid.Column>
                  <h2 key={item}>Auther name</h2>
                  <h5>Comment Text</h5>
                  <Divider/>
                </Grid.Column>
              </Grid>
            )}
          </Grid.Column>s
        </Grid>
      </div>
    );
  }
}

export default ProductPageIndex;
