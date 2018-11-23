import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './partner.css';

const src = 'static/images/a1.png';

const Partner = () => (
  <div className='PartnerDiv'>
    <Grid container textAlign='center' className='PartnerGrid'>
      {
        [0, 1, 2, 3, 4, 5].map(item =>
          <Grid.Column key={item} width={2}>
            <Image src={src}/>
          </Grid.Column>,
        )
      }
    </Grid>
  </div>
);

export default Partner;
