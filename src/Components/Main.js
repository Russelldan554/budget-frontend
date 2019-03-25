import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

  render() {
    return (
        <div>
          <Header />
          <Footer />
        </div>
    );
  }
}

export default Main;
