import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Navbar from './components/Navbar/_Navbar';
import Footer from './components/Footer/_Footer';

import Home from './components/_Home';
import User from './components/_User';

import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />

          <Footer />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
