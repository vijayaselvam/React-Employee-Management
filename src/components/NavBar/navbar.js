import React, { Component } from "react";
import { MenuItem, Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom'
const menuHeaders = [
  {
      'id': '1',
      'parentid': '-1',
      'subMenuWidth': '250px',
      'text': 'Home',
      'color':'orange',
      'link' : '/home'
  },
  {
      'id': '2',
      'parentid': '-1',
      'subMenuWidth': '250px',
      'text': 'Create',
      'color':'green',
      'link' : '/create'
  },
  {
    'id': '3',
    'parentid': '-1',
    'subMenuWidth': '250px',
    'text': 'All Employees',
    'color':'red',
    'link' : '/read'
}
];

export default class NavBar extends Component {
  state = { activeTab: menuHeaders[0].text };

  handleAClick = (e, { name }) => {
    this.setState({ activeTab: name });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <Menu inverted>
          {menuHeaders.map((item) => (
          <Link to={item.link}>
            <MenuItem
              key={item.id}
              name={item.text}
              active={activeTab === item.text}
              color={item.color}
              onClick={this.handleAClick}
            />
            </Link>
          ))}
        </Menu>
      </div>
    );
  }
}