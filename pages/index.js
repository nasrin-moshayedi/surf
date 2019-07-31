import React, {Component} from 'react';
import Link from "next/link";
import DefaultLayout from '../layouts/default_layout';
import HomeIndex from '../components/home_page/home';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout activeItem='home'>
            <Link path="/">
                <HomeIndex/>
            </Link>
        </DefaultLayout>
      </div>
    );
  }
}

export default IndexPage;
