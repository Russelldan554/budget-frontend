import React, { Component } from 'react';
import API from "../Components/API";
import {Button} from "reactstrap";
import axios from "axios";
import { addUsers, addAccount } from "../Components/Utils.js";

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
      let info = [];
      API.get('/users', {
        params: {
        }
      }).then((response) => {
        console.log(response.data[0]);
        info = response.data;
        this.setState({userInfo: info})
      });
    }

    addUser() {
      addUsers("dan4","1@2.com","password","dan","r","2019-01-01");
    }

    getAccount() {
      let info = [];
      API.get('/users/1/accounts', {
        params: {
        }
      }).then((response) => {
        console.log(response.data[0]);
        info = response.data;
        this.setState({accountInfo: info})
      });
    }

    addAccount() {
        addAccount("New",800,1);
    }

  render() {
    return (
      <div className="container-fluid">
        <Button onClick={this.getUsers}>get users</Button>
        <Button onClick={this.addUser}>add users</Button>
        <p>{JSON.stringify(this.state.userInfo)}</p>

        <Button onClick={this.getAccount}>get Account</Button>
        <Button onClick={this.addAccount}>add Account</Button>
        <p>{JSON.stringify(this.state.accountInfo)}</p>
      </div>
    );
  }
}

export default Test;
