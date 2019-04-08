import React, { Component } from 'react';
import {Collapse, Navbar, Nav, NavItem,  UncontrolledDropdown,  DropdownToggle,  DropdownMenu,  DropdownItem } from "reactstrap";
import { NavLink } from 'react-router-dom';
import Brand from './Brand';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.state = {
      collapsed: true,
    }
  }

  toggleCollapsed() {
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
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            { this.props.userName ?
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.props.userName}
                </DropdownToggle>
                <DropdownMenu right className="bg-dark">
                  <DropdownItem className="bg-dark">
                    <NavLink to="/User" className="nav-link" exact={true} activeClassName="active">Account</NavLink>
                  </DropdownItem>
                  <DropdownItem className="bg-dark">
                    <NavLink className="nav-link" activeClassName="active" onClick={() => (this.logout())} to="">Logout</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              :<>
                <NavItem>
                  <NavLink to="/signup" className="nav-link" exact={true} activeClassName="active">Signup</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login" className="nav-link" exact={true} activeClassName="active">Login</NavLink>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
