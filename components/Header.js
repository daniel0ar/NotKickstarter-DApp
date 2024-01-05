import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
import Image from 'next/image'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{marginTop:"20px"}} size='massive' stackable>
        <Link legacyBehavior route='/'>
            <a className='item' style={{width:"250px"}} width="300px">
              <Image src='/assets/logo.png' layout='fill'></Image>
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