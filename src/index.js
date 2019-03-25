import React, { Component } from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Navbar from './components/Navbar/_Navbar';
import Main from './components/Main/_Main';
import Footer from './components/Footer/_Footer';

import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();