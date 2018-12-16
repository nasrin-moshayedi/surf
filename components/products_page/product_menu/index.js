import React, {Component} from 'react';
import Link from 'next/link';
import {Button, Divider, Grid, Header, Icon, Image, Label, Menu, Modal, Select} from 'semantic-ui-react';
import './product_menu.css';

export default class MenuExampleMenus extends Component {
  state = {};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return (
      <Menu secondary className='ProductMenu'>
        <Menu.Menu>
          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
            <Link href='/login'><a>Login</a></Link>
          </Menu.Item>
          <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick}>
            <Select placeholder='categories'/>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
            <Grid>
              <Grid.Column width={15}>
                <Modal trigger={<Icon name="shop"/>}>
                  <Modal.Header>Your Cart</Modal.Header>
                  <Grid>
                    <Grid.Column width={16}>
                      {[0, 1, 2, 3, 4].map(item =>
                        <Modal.Content image>
                          <Grid className='CartGrid'>
                            <Grid.Column width={4}>
                              <Image wrapped size='small' src='/static/images/Aerosol.jpg'/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                              <Modal.Description className='ModalDescription'>
                                <Grid verticalAlign='middle'>
                                  <Grid.Column width={12}>
                                    <Header>Product name</Header>
                                  </Grid.Column>
                                  <Grid.Column width={4}>
                                    <Button color='green' className='ButtonStyle'>Price</Button>
                                  </Grid.Column>
                                </Grid>
                              </Modal.Description>
                            </Grid.Column>
                          </Grid>
                          <Divider/>
                        </Modal.Content>
                      )}
                    </Grid.Column>
                    <Grid.Column width={16} className='TotalPrice'>
                      <Grid>
                        <Grid.Column width={13}>
                          <Button size='medium' color='purple'>CheckOut</Button>
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <h4>$ Total Price</h4>
                        </Grid.Column>
                      </Grid>
                    </Grid.Column>
                  </Grid>

                </Modal>
              </Grid.Column>
            </Grid>
            <Label color='purple' floating circular>2</Label>
          </Menu.Item>
          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
            <Icon name='search'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
