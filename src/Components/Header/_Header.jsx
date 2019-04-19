import React, { Component } from 'react';
import {Collapse, Navbar, Nav, NavItem, NavbarToggler, UncontrolledDropdown,  DropdownToggle,  DropdownMenu,  DropdownItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

import Brand from './Brand';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Brand />
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            { this.props.userName ?
              <React.Fragment>
                <NavItem>
                  <NavLink to="/accounts" className="nav-link" activeClassName="active">Accounts</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/transactions" className="nav-link" activeClassName="active">Transactions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/budgets" className="nav-link" activeClassName="active">Budgets</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {this.props.userName}
                  </DropdownToggle>
                  <DropdownMenu right className="bg-dark">
                    <DropdownItem className="bg-dark">
                      <NavLink to="/user" className="nav-link" activeclassname="active">Profile</NavLink>
                    </DropdownItem>
                    <DropdownItem className="bg-dark">
                      <NavLink className="nav-link" activeclassname="active" onClick={() => (this.logout())} to="">Logout</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </React.Fragment>
            :
              <React.Fragment>
                <NavItem>
                  <NavLink to="/signup" className="nav-link" activeClassName="active">Signup</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                </NavItem>
              </ React.Fragment>
            }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
