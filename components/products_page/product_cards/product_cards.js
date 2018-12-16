import React, {Component} from 'react';
import Link from 'next/link';
import {Grid, Image} from 'semantic-ui-react';

export default class ProductCards extends Component {
  render() {
    return (
      <div>
        <Link href='/productpage'>
          <a>
            <Grid container textAlign='center' className='WhiteColor'>
              <Grid.Column width={16}>
                <h3 className='CategoryName DarkGrey'>product name</h3>
                <h4>price</h4>
              </Grid.Column>
              <Grid.Column width={16}>
                <Image src='/static/images/Aerosol.jpg'/>
              </Grid.Column>
            </Grid>
          </a>
        </Link>
      </div>
    );
  }
}
