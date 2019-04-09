import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Container } from "reactstrap"

import Login from './Views/_Login';
import User from './Views/_User';
import Transactions from './Views/_Transactions';
import Signup from './Views/_CreateAccount';

import Header from './Components/Header/_Header';
import Footer from './Components/Footer/_Footer';
import Welcome from './Views/_Welcome';
import Home from './Views/_Home';
import Accounts from './Views/_Accounts';
import Budgets from './Views/_Budgets';

import './styles/app.scss';

const PrivateRoute = ({ component: Component, ...rest}) => {
  const user_info = localStorage.getItem('username');
  return (
    <Route {...rest} render={(props) => (
      user_info
        ? <Component {...props}/>
      : <Redirect to={{
        pathname:'/',
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
          <Container className="App-body p-0" fluid>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" render={(props) => <Login {...props} hideSidebar={this.hideSidebar} auth={auth} loggedIn={this.loggedIn}/>} />
              <PrivateRoute path="/user" component={User} />
              <PrivateRoute path="/transactions" component={Transactions} />
              <PrivateRoute path="/budgets" component={Budgets} />
              <PrivateRoute path="/accounts" component={Accounts} />
              <PrivateRoute path="/" component={Home} />
              <Route render={() => 
                <Redirect to={{pathname: "/"}} />
              }/>
            </Switch>
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
