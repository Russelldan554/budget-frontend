import React, { Component } from 'react';
import * as API from "../Components/API";
import {Button} from "reactstrap";
import { addUsers, addAccount} from "../Components/Utils.js";

class Test extends Component {
    constructor(props) {
      super(props);

      this.state = {
        userInfo: [],
        accountInfo: []
      }

      this.getUsers = this.getUsers.bind(this);
      this.addUser = this.addUser.bind(this);
      this.getAccount = this.getAccount.bind(this);
      this.addAccount = this.addAccount.bind(this);
    }

    getUsers() {
      API.getUsers().then((res)=>{this.setState({userInfo: res})});
    }

    addUser() {
      API.getUser(1).then((res)=>{this.setState({userInfo: res})});
    }

    getAccount() {
      API.getAccounts(1).then((res)=>{this.setState({accountInfo: res})});
    }

    addAccount() {

    }

  render() {
    return (
      <div className="container-fluid">
        <Button onClick={this.getUsers}>get users</Button>
        <Button onClick={this.addUser}>get user</Button>
        <p>{JSON.stringify(this.state.userInfo)}</p>

        <Button onClick={this.getAccount}>get Account</Button>
        <Button onClick={this.addAccount}>add Account</Button>
        <p>{JSON.stringify(this.state.accountInfo)}</p>
      </div>
    );
  }
}

export default Test;
