import React, { Component } from 'react';
import { Card, CardBody, CardFooter, Row, Col } from 'reactstrap';

import * as API from '../API';
import Utils from '../Utils';

import Account from './Account'
import WidgetCardHeader from '../WidgetCardHeader/_WidgetCardHeader'

class AccountsCard extends Component {
  constructor(props) {
    super(props);
    // Use states if netWorth will be calculated on the frontend?
    this.cardHeader = Utils.cardHeaders[0];
    this.buttonID = "addAccount";
    this.actionTitle = "n Account";
    this.actionConfirm = "Add Account"
    this.state = {
        assets: 15000,
        debts: 250,
        netWorth: 14750
    }
  }

  render() {
    return (
      <Card id="accountsCard">
        <WidgetCardHeader cardHeader={this.cardHeader} buttonID={this.buttonID} actionTitle={this.actionTitle} actionConfirm={this.actionConfirm} />
        <CardBody>
          <Row noGutters>
            {/*For each account in database (for pertaining user) create an Account Component with the appropriate props*/}
            <Account accountName={"Account #1"} bankName={"Bank Name"} accountType={"Checking"} balance={5000.00}/>
            <Account accountName={"Account #2"} bankName={"Bank Name"} accountType={"Savings"} balance={10000.00}/>
            <Account accountName={"Account #3"} bankName={"Bank Name"} accountType={"Credit"} balance={250.00}/>
          </ Row>
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

export default AccountsCard;
