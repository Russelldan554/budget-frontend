import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Container } from "reactstrap"

import User from './Views/_User';
import Transactions from './Views/_Transactions';
import SignUp from './Views/_SignUp';

import Header from './Components/Header/_Header';
import Footer from './Components/Footer/_Footer';
import Welcome from './Views/_Welcome';
import Login from './Views/_Login';
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
    this.loggedIn = this.loggedIn.bind(this);
    this.state = {
        userName: ""
    }
  }

  componentDidMount() {
    const userName = localStorage.getItem('username');
    if (userName) {
        this.setState({
          userName: userName
        });
    }
  }

  loggedIn(userName) {
    this.setState({
      userName: userName
    });
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Router>
          <Header userName={this.state.userName} />
          <Container className="App-body p-0 flex-grow-1" fluid  >
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/signup" render={(props) => <SignUp {...props} auth={auth} loggedIn={this.loggedIn} />} />
              <Route path="/login" render={(props) => <Login {...props} auth={auth} loggedIn={this.loggedIn} />} />
              <PrivateRoute path="/user" component={User} />
              <PrivateRoute path="/transactions" component={Transactions} />
              <PrivateRoute path="/budgets" component={Budgets} />
              <PrivateRoute path="/accounts" component={Accounts} />
              <PrivateRoute path="/home" component={Home} />
              <Route render={() => 
                <Redirect to={{pathname: "/home"}} />
              }/>
            </Switch>
          </Container>
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
