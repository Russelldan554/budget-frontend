import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem,  UncontrolledDropdown,  DropdownToggle,  DropdownMenu,  DropdownItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

class Sidebar extends Component{
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="_Sidebar">
      <Navbar color="faded" light>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/" className="nav-link" exact={true} activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/budget" className="nav-link" exact={true} activeClassName="active">Budgets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/transactions" className="nav-link" exact={true} activeClassName="active">Transactions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/accounts" className="nav-link" exact={true} activeClassName="active">Accounts</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Sidebar;

/*

*/
