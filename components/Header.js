import React, { Component } from 'react'
import { Image, Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{marginTop:"20px"}} size='massive' stackable>
        <Menu.Item>
            <Image src='/assets/logo.png' fluid></Image>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='campaigns'
            active={activeItem === 'campaigns'}
            onClick={this.handleItemClick}
          >
            Campaigns
          </Menu.Item>

          <Menu.Item
            name='requests'
            active={activeItem === 'requests'}
            onClick={this.handleItemClick}
          >
            Requests
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}