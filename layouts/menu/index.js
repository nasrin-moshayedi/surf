import React, {Component} from 'react';
import {Menu, Segment} from 'semantic-ui-react';

export default class MainMenu extends Component {
  state = {activeItem: 'home'};
  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;
    return (
      <Segment inverted textAlign='center'>
        <Menu pointing borderless secondary size='massive'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
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
