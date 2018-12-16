import React, {Component} from 'react';
import Router from 'next/router';
import {Menu, Segment} from 'semantic-ui-react';
import './menu.css';

class MainMenu extends Component {
  getRouteName = (name) => routeNames[name];

  handleItemClick = (e, {name}) => {
    Router.push(this.getRouteName(name));
  };

  render() {
    const {activeItem} = this.props;
    return (
      <Segment inverted className='MenuSegment'>
        <Menu pointing borderless inverted secondary size='massive'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='product'
            active={activeItem === 'product'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='team member'
            active={activeItem === 'team member'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='technology'
            active={activeItem === 'technology'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='news'
            active={activeItem === 'news'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='contact us'
            active={activeItem === 'contact us'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

const routeNames = {
  'home': '/',
  'team member': '/aboutus',
  'technology': '/technology',
  'news': '/news',
  'contact us': '/contactus',
  'product': '/product'
};

export default MainMenu;
