import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.url = props.url;
    this.exact = props.exact;

    if (this.exact === undefined) {
      this.exact = false;
    }

    this.state = {
      
    }
  }

  render() {
    return (
      <li className="nav-item">
        <NavLink to={this.url} className="nav-link" exact={this.exact} activeClassName="active">
            {this.name}
        </NavLink>
      </li>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  exact: PropTypes.bool
}

export default Item;