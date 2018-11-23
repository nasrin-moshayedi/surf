import React, {Component} from 'react';
import MyLayout from '../layouts/my_layout';
import News from './../components/news_page/news';

class Index extends Component {
  render() {
    return (
      <div>
        <MyLayout>
          <News/>
        </MyLayout>
      </div>
    );
  }
}

export default Index;
