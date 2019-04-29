import React, { Component } from 'react';
import {
  Collapse, DropdownToggle, DropdownMenu, DropdownItem, Navbar, Nav, NavItem,
  NavbarToggler, UncontrolledDropdown,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Brand from './Brand';

class Header extends Component {
  static logout() {
    localStorage.clear();
    window.location.reload();
  }

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    const {
      collapsed,
    } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const {
      userName,
    } = this.props;

    const {
      collapsed,
    } = this.state;

    return (
      <Navbar color="dark" dark expand="md">
        <Brand />
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            {userName
              ? (
                <React.Fragment>
                  <NavItem>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/accounts"
                    >
                      {'Accounts'}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/transactions"
                    >
                      {'Transactions'}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/budgets"
                    >
                      {'Budgets'}
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {userName}
                    </DropdownToggle>
                    <DropdownMenu right className="bg-dark">
                      <DropdownItem className="bg-dark">
                        <NavLink
                          activeclassname="active"
                          className="nav-link"
                          to="/user"
                        >
                          {'Profile'}
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem className="bg-dark">
                        <NavLink
                          activeclassname="active"
                          className="nav-link"
                          onClick={() => (this.logout())}
                          to=""
                        >
                          {'Logout'}
                        </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </React.Fragment>
              )
              : (
                <React.Fragment>
                  <NavItem>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/signup"
                    >
                      {'Signup'}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/login"
                    >
                      {'Login'}
                    </NavLink>
                  </NavItem>
                </React.Fragment>
              )
            }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
