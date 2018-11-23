import React, {Component} from 'react';
import {Grid, Image} from 'semantic-ui-react';

// import './services.css';

class Services extends Component {
  render() {
    const reversed = this.props.reverse ? 'computer' : undefined;

    return (
      <Grid container reversed={reversed} verticalAlign='middle' className='PaddingBottom'>
        <Grid.Column width={10} className='WhiteBackground'>
          <h3 className='DarkGrey'>
            Powertransmissionlines
          </h3>
          <h5 className='DarkGrey'>
            Extremeandfluctuatingweatherconditions,includinghigh humidity,freezingtemperatures....
          </h5>
          <h5 className='ReadMore'>Read more</h5>
        </Grid.Column>
        <Grid.Column width={6}>
          <Image src='static/images/sh1.jpg'/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Services;
