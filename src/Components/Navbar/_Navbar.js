import React, { Component } from 'react';
import Brand from './Brand';
import Item from './Item';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Brand />
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            
            <Item 
              name={"Home"}
              url={"/"} 
            />
            <Item 
              name={"Link1"}
              url={"/"} 
            />
            <Item 
              name={"Link2"}
              url={"/"} 
            />
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;