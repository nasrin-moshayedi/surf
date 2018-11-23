import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import News from './../components/news_page/news';

class NewsPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout activeItem='news'>
          <News/>
        </DefaultLayout>
      </div>
    );
  }
}

export default NewsPage;
