import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Container, Col, Row} from "reactstrap"

import Header from './Components/Header/_Header';
import Footer from './Components/Footer/_Footer';
import Sidebar from './Components/Sidebar';
import Home from './Views/_Home';
import Login from './Views/_Login';
import Accounts from './Views/_Accounts';
import UserHome from './Views/_UserHome';
import User from './Views/_User';
import Transactions from './Views/_Transactions';
import Budgets from './Views/_Budgets';
import Signup from './Views/_CreateAccount';

import './styles/app.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const PrivateRoute = ({ component: Component, ...rest}) => {
  const user_info = localStorage.getItem('username');
  return (
    <Route {...rest} render={(props) => (
      user_info
        ? <Component {...props}/>
      : <Redirect to={{
        pathname:'/login',
        state: { from: props.location}
      }}/>
    )
  }/>)
}

const auth = {
  authenticate(userName, password) {
      //Check DB for username and password
      localStorage.setItem("username", userName);
      localStorage.setItem("token", 1234);
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        userName: "",
        showBar:true
    }

    this.loggedIn = this.loggedIn.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
  }

  componentDidMount() {
    const userName = localStorage.getItem('username');
    if (userName) {
        this.setState({userName: userName});
    }
  }

  loggedIn(userName) {
    this.setState({userName: userName});
  }

  hideSidebar(){
    this.setState({showBar: false});
  }

  showSidebar(){
    this.setState({showBar: true});
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header userName={this.state.userName} />
          <Container fluid>
            <Row className="pt-4">
              <Col sm={12} lg={2} xl={1} className="">
                { this.state.showBar ?
                    <Sidebar />
                    : ""
                }
              </Col>
              <Col sm={10}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/login" render={(props) => <Login {...props} hideSidebar={this.hideSidebar} auth={auth} loggedIn={this.loggedIn}/>} />
                  <PrivateRoute path="/user" component={User} />
                  <PrivateRoute path="/transactions" component={Transactions} />
                  <PrivateRoute path="/budget" component={Budgets} />
                  <PrivateRoute path="/accounts" component={Accounts} />
                  <PrivateRoute exact path="/home" component={UserHome} />
                  </Switch>
              </Col>
            </Row>
          </Container>
          {/* <Footer  /> */}
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
