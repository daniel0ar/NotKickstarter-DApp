import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{marginTop:"20px"}} stackable>
        <Menu.Item>
            NotKickstarter<img alt="logo" src='/assets/logo.png' />
        </Menu.Item>

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
      </Menu>
    )
  }
}