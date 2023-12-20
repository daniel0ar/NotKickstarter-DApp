import React, { Component } from 'react';
import { Image, Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{marginTop:"20px"}} size='massive' stackable>
        <Link legacyBehavior route='/'>
            <a className='item'>
              <Image src='./assets/logo.png' fluid></Image>
            </a>
        </Link>
        <Menu.Menu position='right'>
          <Link legacyBehavior route='/'>
              <a className='item'>Campaigns</a>
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}