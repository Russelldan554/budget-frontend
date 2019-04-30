import React, { Component } from 'react';
import { Button } from 'reactstrap';
import * as API from '../Components/API';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
      accountInfo: [],
    };

    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getAccount = this.getAccount.bind(this);
    this.addAccount = this.addAccount.bind(this);
    this.getBudgets = this.getBudgets.bind(this);
    this.addBudgets = this.addBudgets.bind(this);
  }

  getUsers() {
    API.getUsers()
      .then((res) => {
        this.setState({
          userInfo: res,
        });
      });
  }

  getUser() {
    API.getUser()
      .then((res) => {
        this.setState({
          userInfo: res,
        });
      });
  }

  getAccount() {
    API.getAccounts()
      .then((res) => {
        this.setState({
          accountInfo: res,
        });
      });
  }

  getBudgets() {
    API.getBudgets(1)
      .then((res) => {
        this.setState({
          budgetInfo: res,
        });
      });
  }

  addUser() {
    const payload = {
      userName: 'Dan10',
      email: 'test@test',
      password: 'password',
      firstName: 'dan',
      lastName: 'r',
      dateCreated: '2019-04-17',
    };
    API.addUser(payload)
      .then((res) => {
        this.setState({});
      });
  }

  addAccount() {
    const id = 1;
    const payload = {
      accountName: 'Testing',
      accountType: 'Checking',
      bankName: 'bank1',
      balance: 7777.77,
    };
    API.addAccount(id, payload)
      .then((res) => {
        this.setState({});
      });
  }

  addBudgets() {
    const id = 1;
    const payload = {
      category: 'Shopping',
      spentAmount: 24.56,
      maxAmount: 100,
    };
    const payload1 = {
      category: 'Restaurant',
      spentAmount: 90.27,
      maxAmount: 100.00,
    };
    const payload2 = {
      category: 'Groceries',
      spentAmount: 114.38,
      maxAmount: 100.0,
    };
    const payload3 = {
      category: 'Rent',
      spentAmount: 1400,
      maxAmount: 2000,
    };
    API.addBudget(id, payload)
      .then((res) => {
        this.setState({});
      });
    API.addBudget(id, payload1)
      .then((res) => {
        this.setState({});
      });
    API.addBudget(id, payload2)
      .then((res) => {
        this.setState({});
      });
    API.addBudget(id, payload3)
      .then((res) => {
        this.setState({});
      });
  }

  render() {
    const {
      accountInfo,
      budgetInfo,
      userInfo,
    } = this.state;

    return (
      <div className="container-fluid">
        <Button onClick={this.getUsers}>get users</Button>
        <Button onClick={this.getUser}>get user</Button>
        <Button onClick={this.addUser}>Add user</Button>
        <table className="bg-white p-3">
          <tbody>
            {userInfo.map(item => (
              <tr>
                <td>{item.userName}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={this.getAccount}>get Account</Button>
        <Button onClick={this.addAccount}>add Account</Button>
        <p>{JSON.stringify(accountInfo)}</p>

        <Button onClick={this.getBudgets}>get Budget</Button>
        <Button onClick={this.addBudgets}>add Budgets (x4)</Button>
        <p>{JSON.stringify(budgetInfo)}</p>
      </div>
    );
  }
}

export default Test;
