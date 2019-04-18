import React, { Component } from 'react';
import * as API from "../Components/API";
import {Button} from "reactstrap";

class Test extends Component {
    constructor(props) {
      super(props);

      this.state = {
        userInfo: [],
        accountInfo: []
      }

      this.getUsers = this.getUsers.bind(this);
      this.getUser = this.getUser.bind(this);
      this.addUser = this.addUser.bind(this);
      this.getAccount = this.getAccount.bind(this);
      this.addAccount = this.addAccount.bind(this);
    }

    getUsers() {
      API.getUsers().then((res)=>{this.setState({userInfo: res})});
    }

    getUser() {
      API.getUser(1).then((res)=>{this.setState({userInfo: res})});
    }

    getAccount() {
      API.getAccounts(1).then((res)=>{this.setState({accountInfo: res})});
    }

    addUser() {
        let payload = {
            'userName': 'Dan10',
            'email':'test@test',
            'password':'password',
            'firstName':'dan',
            'lastName':'r',
            'dateCreated':'2019-04-17'
        }
      API.addUser(payload).then((res)=>{this.setState({})});
    }

    addAccount() {
      let id = 1;
      let payload = {
      	"accountName": "Testing",
      	"balance": 7777.77
      }
      API.addAccount(id, payload).then((res)=>{this.setState({})});
    }

  render() {
    return (
      <div className="container-fluid">
        <Button onClick={this.getUsers}>get users</Button>
        <Button onClick={this.getUser}>get user</Button>
        <Button onClick={this.addUser}>Add user</Button>
        <p>{JSON.stringify(this.state.userInfo)}</p>

        <Button onClick={this.getAccount}>get Account</Button>
        <Button onClick={this.addAccount}>add Account</Button>
        <p>{JSON.stringify(this.state.accountInfo)}</p>
      </div>
    );
  }
}

export default Test;
