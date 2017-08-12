import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import timeManagementLogo from './time-management.svg';
import {Link} from 'react-router-dom';
import './Navigation.css';

export default props => (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img src={timeManagementLogo}
                 alt="ttrac logo" className="App-logo"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/about-us">About</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)