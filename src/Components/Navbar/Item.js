import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    }
  }

  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href={ this.props.url }>{ this.props.name }</a>
      </li>
    );
  }
}

export default Item;