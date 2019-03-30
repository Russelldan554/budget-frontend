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

  render() {
    return (
        <Navbar color="dark" dark expand="md">
          <Brand />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink to="/" className="nav-link" exact={true} activeClassName="active">Home</NavLink>
               </NavItem>
               <UncontrolledDropdown nav inNavbar>
                 <DropdownToggle nav caret>
                   Username
                 </DropdownToggle>
                 <DropdownMenu right className="bg-dark">
                   <DropdownItem className="bg-dark">
                     <NavLink to="/User" className="nav-link" exact={true} activeClassName="active">Account</NavLink>
                   </DropdownItem>
                   <DropdownItem className="bg-dark">
                     <NavLink to="/User" className="nav-link" exact={true} activeClassName="active">Logout</NavLink>
                   </DropdownItem>
                 </DropdownMenu>
               </UncontrolledDropdown>
             </Nav>
           </Collapse>
        </Navbar>
    );
  }
}

export default Header;
