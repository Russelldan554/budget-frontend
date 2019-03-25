import React, { Component } from 'react';
import logo from './logo.svg';

class Brand extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <a className="navbar-brand" href="/">
        <img src={ logo } width="30" height="30" class="d-inline-block align-top" alt="" />
        Budget APP
      </a>
    );
  }
}

export default Brand;