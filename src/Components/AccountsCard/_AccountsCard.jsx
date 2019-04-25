import React, { Component } from 'react';
import { Card, CardBody, CardFooter, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';
import Utils from '../Utils';

import Account from './Account'
import WidgetCardHeader from '../WidgetCardHeader/_WidgetCardHeader'

class AccountsCard extends Component {
  constructor(props) {
    super(props);
    this.actionConfirm = "Add Account"
    this.actionTitle = "n Account";
    this.buttonID = "addAccount";
    this.calculateNetWorth = this.calculateNetWorth.bind(this);
    this.cardHeader = Utils.cardHeaders[0];
    this.getAccounts = this.getAccounts.bind(this);
    this.toggleDeleteButtons = this.toggleDeleteButtons.bind(this);
    this.state = {
      accounts: [],
      assets: 0,
      debts: 0,
      deleteButtons: false,
      error: null,
      isLoading: true,
      netWorth: 0,
    }
  }

  getAccounts() {
    API.getAccounts(1)
    .then(res => {
      this.setState({
        accounts: res,
        isLoading: false
      });
    })
    .catch(error => {
      this.setState ({
        error,
        isLoading: false
      });
    })
    .then(() => {
      this.calculateNetWorth();
    })
  }

  calculateNetWorth() {
    this.setState({
      assets: 0,
      debts: 0,
      netWorth: 0,
    })
    this.state.accounts.forEach(account => {
      if (account.accountType === "Checking" || 
      account.accountType === "Savings") {
        const assetsValue = parseFloat((this.state.assets + account.balance).toFixed(2));
        this.setState({
          assets: assetsValue
        })
      }
      if (account.accountType === "Credit") {
        const debtsValue = parseFloat((this.state.debts + account.balance).toFixed(2));
        this.setState({
          debts: debtsValue
        })
      }
      const netWorthValue = parseFloat((this.state.assets - this.state.debts).toFixed(2));
      this.setState({
        netWorth: netWorthValue
      })
    });
  }

  toggleDeleteButtons() {
    this.setState ({
      deleteButtons: !this.state.deleteButtons
    })
  }

  componentDidMount() {
    this.getAccounts();
  }

  render() {
    const { isLoading, accounts, error } = this.state;
    return (
      <Card id="accountsCard">
        <WidgetCardHeader 
          actionConfirm={this.actionConfirm} 
          actionTitle={this.actionTitle} 
          buttonID={this.buttonID} 
          cardHeader={this.cardHeader} 
          getAccounts={this.getAccounts} 
          toggleDeleteButtons={this.toggleDeleteButtons} 
        />
        <CardBody>
          <Row noGutters fluid={"true"}>
            {/*Create a Budget Component for each of the User's budgets*/}
            <React.Fragment>
              {error ?  
                <Account 
                  accountName={<span className="error">{error.message}</span>} 
                  accountType={""} 
                  balance={0} 
                  bankName={""} 
                  deleteButtons={this.state.deleteButtons} 
                  getAccounts={this.getAccounts} 
                />
                : 
                null
              }
              {!isLoading ? (
                accounts.map((account) => {
                  const { 
                    accountId, 
                    accountName, 
                    accountType, 
                    balance, 
                    bankName 
                  } = account;
                  return (
                    <Account 
                      accountName={accountName} 
                      accountType={accountType} 
                      balance={balance} 
                      bankName={bankName} 
                      deleteButtons={this.state.deleteButtons} 
                      getAccounts={this.getAccounts} 
                      id={accountId} 
                      key={accountId} 
                    />
                  );
                })
              ) : (
                <Account 
                  accountName={"Loading..."} 
                  accountType={"Loading..."} 
                  balance={0} 
                  bankName={"Loading..."} 
                  deleteButtons={this.state.deleteButtons} 
                  getAccounts={this.getAccounts} 
                />
              )}
            </React.Fragment>
          </Row>
        </CardBody>
        <CardFooter className="account-totals">
          <Row className="assets">
            <Col className="text-left title">
              ASSETS
            </Col>
            <Col className="text-right amount">
              +${this.state.assets}
            </Col>
          </Row>
          <Row className="debts">
            <Col className="text-left title">
              DEBTS
            </Col>
            <Col className="text-right amount">
              -${this.state.debts}
            </Col>
          </Row>
          <Row className="net-worth">
            <Col className="text-left title">
              NET WORTH
            </Col>
            <Col className="text-right amount">
              ${this.state.netWorth}
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

AccountsCard.propTypes = {
  actionConfirm: PropTypes.string,
  actionTitle: PropTypes.string,
  buttonID: PropTypes.string,
  calculateNetWorth: PropTypes.func,
  cardHeader: PropTypes.string,
  getAccounts: PropTypes.func,
  toggleDeleteButtons: PropTypes.func
}

export default AccountsCard;
