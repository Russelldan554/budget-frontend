import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Brand from './Brand';
import Item from './Item';

class Navbar extends Component {
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
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Brand />
        <button className="navbar-toggler" data-toggle="collapse" data-target="#appNav" onClick={this.toggleCollapsed}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={"navbar-collapse collapse " + (this.state.collapsed ? "" : "show")}>
          <ul id="appNav" className="navbar-nav ml-auto">
          
            <Item name={"Home"} url={"/"} exact={true} />
            <Item name={"User"} url={"/User"} />
            
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  toggleCollapsed: PropTypes.func
}

export default Navbar;
