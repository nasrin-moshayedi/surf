import React from 'react';
import {Grid} from 'semantic-ui-react';
import './product_picture.css';

const ProductPicture = () => (
  <div className='ProductPicture Picture'>
    <div className='PictureOpaity'>
      <Grid container textAlign='center' verticalAlign='middle' className='TextGrid'>
        <Grid.Column width={10} className='ProductPictureText'>
          <h1 className='ProductTextTitle PictureTextTitle'>Our Products</h1>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default ProductPicture;

