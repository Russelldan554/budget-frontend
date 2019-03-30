import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Container, Col, Row} from "reactstrap"
import { useReactTable } from "react-table";

import Header from './Components/Header/_Header';
import Footer from './Components/Footer/_Footer';
import Sidebar from './Components/Sidebar';
import Home from './Views/_Home';
import User from './Views/_User';
import Transactions from './Views/_Transactions';
import Budgets from './Views/_Budgets';
import Accounts from './Views/_Accounts';
import Login from './Views/_Login';

import './styles/app.scss';
import "react-table/react-table.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Container fluid>
            <Row>
              <Col sm={12} lg={2} xl={1} className="">
                <Sidebar />
              </Col>
              <Col sm={10}>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={User} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/budget" component={Budgets} />
                <Route path="/accounts" component={Accounts} />
                <Route path="/login" component={Login} />
              </Col>
            </Row>
          </Container>
          <Footer  />
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
