import React, { Component } from 'react';
import {
  Card, CardBody, CardFooter, Col, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';
import Utils from '../Utils';

import Account from './Account';
import WidgetCardHeader from '../WidgetCardHeader/_WidgetCardHeader';

class AccountsCard extends Component {
  constructor(props) {
    super(props);
    this.calculateNetWorth = this.calculateNetWorth.bind(this);
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
    };
  }

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts() {
    API.getAccounts(1)
      .then((res) => {
        this.setState({
          accounts: res,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      })
      .then(() => {
        this.calculateNetWorth();
      });
  }

  calculateNetWorth() {
    this.setState({
      assets: 0,
      debts: 0,
      netWorth: 0,
    });

    const { accounts } = this.state;

    accounts.forEach((account) => {
      const { assets, debts } = this.state;
      if (account.accountType === 'Checking'
      || account.accountType === 'Savings') {
        const assetsValue = parseFloat((assets + account.balance).toFixed(2));
        this.setState({
          assets: assetsValue,
        });
      }

      if (account.accountType === 'Credit') {
        const debtsValue = parseFloat((debts + account.balance).toFixed(2));
        this.setState({
          debts: debtsValue,
        });
      }
    });

    const { assets, debts } = this.state;
    const netWorthValue = parseFloat((assets - debts).toFixed(2));
    this.setState({
      netWorth: netWorthValue,
    });
  }

  toggleDeleteButtons() {
    const { deleteButtons } = this.state;
    this.setState({
      deleteButtons: !deleteButtons,
    });
  }

  render() {
    const {
      actionConfirm, actionTitle, buttonID, cardHeader,
    } = this.props;

    const {
      accounts, assets, debts, deleteButtons, error, isLoading, netWorth,
    } = this.state;

    return (
      <Card id="accountsCard">
        <WidgetCardHeader
          actionConfirm={actionConfirm}
          actionTitle={actionTitle}
          buttonID={buttonID}
          cardHeader={cardHeader}
          getAccounts={this.getAccounts}
          toggleDeleteButtons={this.toggleDeleteButtons}
        />
        <CardBody>
          <Row noGutters fluid="true">
            {/* Create a Budget Component for each of the User's budgets */}
            <React.Fragment>
              {error
                ? (
                  <Account
                    accountName={<span className="error">{error.message}</span>}
                    accountType=""
                    balance={0}
                    bankName=""
                    deleteButtons={deleteButtons}
                    getAccounts={this.getAccounts}
                  />
                )
                : (
                  null
                )
              }
              {!isLoading ? (
                accounts.map((account) => {
                  const {
                    accountId,
                    accountName,
                    accountType,
                    balance,
                    bankName,
                  } = account;
                  return (
                    <Account
                      accountName={accountName}
                      accountType={accountType}
                      balance={balance}
                      bankName={bankName}
                      deleteButtons={deleteButtons}
                      getAccounts={this.getAccounts}
                      id={accountId}
                      key={accountId}
                    />
                  );
                })
              ) : (
                <Account
                  accountName="Loading..."
                  accountType="Loading..."
                  balance={0}
                  bankName="Loading..."
                  deleteButtons={deleteButtons}
                  getAccounts={this.getAccounts}
                />
              )}
            </React.Fragment>
          </Row>
        </CardBody>
        <CardFooter className="account-totals">
          <Row className="assets">
            <Col className="text-left title">ASSETS</Col>
            <Col className="text-right amount">{`+$${assets}`}</Col>
          </Row>
          <Row className="debts">
            <Col className="text-left title">DEBTS</Col>
            <Col className="text-right amount">{`-$${debts}`}</Col>
          </Row>
          <Row className="net-worth">
            <Col className="text-left title">NET WORTH</Col>
            <Col className="text-right amount">{`$${netWorth}`}</Col>
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
  cardHeader: PropTypes.string,
};

AccountsCard.defaultProps = {
  actionConfirm: 'Add Account',
  actionTitle: 'n Account',
  buttonID: 'addAccount',
  cardHeader: Utils.cardHeaders[0],
};

export default AccountsCard;
