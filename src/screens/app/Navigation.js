import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import timeManagementLogo from './time-management.svg';
import {Link} from 'react-router-dom';
import './Navigation.css';
import {LinkContainer} from 'react-router-bootstrap';

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
          <LinkContainer to="/" exact>
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
            <LinkContainer to="/projects" exact>
                <NavItem eventKey={2}>Projects</NavItem>
            </LinkContainer>
          <LinkContainer to="/about-us" exact>
            <NavItem eventKey={3}>About</NavItem>
          </LinkContainer>
            <LinkContainer to="/testground" exact>
                <NavItem eventKey={4}>Testground</NavItem>
            </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
