import React, {Component} from 'react';
import LastNews from '../latest_news';
import NewsCard from '../news_cards';

class NewsIndex extends Component {
  render() {
    return (
      <div className='BodyBackground'>
        <LastNews/>
        <NewsCard/>
      </div>
    );
  }
}

export default NewsIndex;
