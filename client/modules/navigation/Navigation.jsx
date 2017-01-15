import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link, hashHistory} from 'react-router';


class Navigation extends React.Component {

  findMatches() {
    this.props.findMatches();
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand className="navButton">
            Nokkangken
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem  className="navButton" onClick={() => {hashHistory.push('/home');}}>
            Go Home
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}


export default Navigation;
