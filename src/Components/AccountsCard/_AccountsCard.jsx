import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap';

import Account from './Account'

class AccountsCard extends Component {
  constructor(props) {
    super(props);
    // Use states if netWorth will be calculated on the frontend?
    this.state = {
        assets: 15000,
        debts: 250,
        netWorth: 14750
    }
  }

  render() {
    return (
      <Card className="accountsCard">
        <CardHeader>
          <h3 className="cardHeader">Accounts</h3>
        </CardHeader>
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
